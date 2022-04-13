import { noop } from "./noop";

export function registerCachingSw(){
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./caching.js')
        .catch(err => console.warn(`Failed to register SW: ${err}`));
    });
    
    navigator.serviceWorker.ready.then( reg => {
      fetch("https://api.github.com/repos/koiosonline/app.koios.world/releases/latest")
        .then(_=>_.json())
        .then(d=>reg.active.postMessage(d.name || "default"))
        .catch(()=>noop);
    });
  }
}
