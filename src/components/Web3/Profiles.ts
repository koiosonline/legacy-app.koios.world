import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import Ceramic from '@ceramicnetwork/http-client'
import { IDX } from '@ceramicstudio/idx'
import { DID } from 'dids'
import { provider } from './Web3'

declare const window: any;

const CERAMIC_URL = process.env.CERAMIC_API || 'http://localhost:7007'

export const authenticate = async (address) => {
  const ethProvider = provider;

  const threeIdConnect = new ThreeIdConnect()
  const authProvider = new EthereumAuthProvider(ethProvider, address)
  await threeIdConnect.connect(authProvider)

  const ceramic = new Ceramic(CERAMIC_URL)

  ceramic.did = new DID({
    provider: threeIdConnect.getDidProvider(),
    resolver: ThreeIdResolver.getResolver(ceramic)
  })

  await ceramic.did.authenticate()

  window.idx = new IDX({ ceramic })
  window.ceramic = ceramic
  window.did = ceramic.did.id
}

export const setupIDX = async () => {
  const ceramic = new Ceramic(CERAMIC_URL)
  window.idx = new IDX({ ceramic })
  window.ceramic = ceramic
}

export const FindProfile = async (address: string) => {
  try {
    const profile = await window.idx.get("basicProfile", `${address}@eip155:3`);
    let profilename: string = profile.name ? profile.name : address;
    let picturesource;
    if (profile.image) {
      picturesource = profile.image.original.src;
    }
    let entry = { "name": profilename, "image": picturesource };
    return entry;
  }
  catch {
    console.error("DID not found");
  }
}
/*
export const FindProfileLeaderboard = async (address: string) => {
  try {
    //if (localStorage.getItem(address)) {
    ///  let entry = JSON.parse(localStorage.getItem(address));
    // return entry;
    // }
    //else {
    const caip10address = address + "@eip155:1";
    console.log(caip10address)
    const profile = await window.idx.get("basicProfile", caip10address);
    let profilename: string = profile.name ? profile.name : address;
    let picturesource;
    if (profile.image) {
      picturesource = profile.image.original.src;
    }
    let entry = { "name": profilename, "image": picturesource };
    localStorage.setItem(address, JSON.stringify(entry));
    return entry;
    //}
  }
  catch {
    console.error("DID not found");
  }
}*/

/*
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
}*/