import type { DID } from 'dids';
import type { IDX } from '@ceramicstudio/idx';
import type { CeramicApi } from '@ceramicnetwork/common';
import { getLegacy3BoxProfileAsBasicProfile } from '@ceramicstudio/idx';

import { createCeramic } from './Ceramic';
import { createIDX } from './Idx';

declare global {
  interface Window {
    did?: DID
    idx?: IDX
    ceramic?: CeramicApi
  }
}

const ceramicPromise = createCeramic();

export const authenticate = async (): Promise<IDX> => {
  const [ceramic] = await Promise.all([ceramicPromise])
  const idx = createIDX(ceramic);
  window.did = ceramic.did;
  return idx;
}

export const FindProfile = async (address: string) => {
  try {
    const profile = await getLegacy3BoxProfileAsBasicProfile(address);
    if (localStorage.getItem(address)) {
      let entry = JSON.parse(localStorage.getItem(address));
      console.log(entry);
      return entry;
    }
    else {
      let profilename: string = profile.name ? profile.name : address;
      let picturesource;
      if (profile.image) {
        picturesource = profile.image.original.src;
      }
      let entry = { "name": profilename, "image": picturesource };
      localStorage.setItem(address, JSON.stringify(entry));
      return entry;
    }
  } catch {
    console.error("DID not found");
  }
}