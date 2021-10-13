import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect';
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import Ceramic from '@ceramicnetwork/http-client'
import { IDX, getLegacy3BoxProfileAsBasicProfile } from '@ceramicstudio/idx'
import { DID } from 'dids'
import { provider } from './Web3'

declare const window: any;

const CERAMIC_URL = process.env.CERAMIC_API || 'https://gateway-clay.ceramic.network'

export const authenticate = async (address: string) => {
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
    try { //getting the IDX profile
      const profile = await window.idx.get("basicProfile", `${address}@eip155:4`);
      let profilename: string = profile.name ? profile.name : address;
      let picturesource;
      if (profile.image) {
        picturesource = profile.image.original.src;
      }
      let entry = { "name": profilename, "image": picturesource };
      return entry;
    }
    catch { //get legacy 3box profile if IDX is not available
      console.error("IDX profile not found, using legacy");
      const profile = await getLegacy3BoxProfileAsBasicProfile(address);
      let profilename: string = profile.name ? profile.name : address;
      let picturesource;
      if (profile.image) {
        picturesource = profile.image.original.src;
      }
      let entry = { "name": profilename, "image": picturesource };
      return entry;
    }
  }
  catch {
    console.error("profile not found");
  }
}
