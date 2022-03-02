import Ceramic from '@ceramicnetwork/http-client';
import { IDX } from '@ceramicstudio/idx';
import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect';
import { DID } from 'dids';
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver';

declare global {
  interface Window {
    idx: any;
    ceramic: any;
    did: any;
  }
}

export const getDIDAuthenticated = async (accountAddress: string, provider: any) => {
  const CERAMIC_URL = 'https://gateway-clay.ceramic.network' || 'https://ceramic-clay.3boxlabs.com';

  const isAuthenticated = localStorage.getItem(accountAddress + 'authenticated') === 'authenticated';

  if (!isAuthenticated) {
    const ethProvider = provider;
    const threeIdConnect = new ThreeIdConnect();
    const authProvider = new EthereumAuthProvider(ethProvider, accountAddress);

    await threeIdConnect.connect(authProvider);

    const ceramic = new Ceramic(CERAMIC_URL);

    ceramic.did = new DID({
      provider: threeIdConnect.getDidProvider(),
      resolver: ThreeIdResolver.getResolver(ceramic),
    });

    await ceramic.did.authenticate();

    window.idx = new IDX({ ceramic });
    window.ceramic = ceramic;
    window.did = ceramic.did.id;
    localStorage.setItem(accountAddress + 'authenticated', 'authenticated');
  } else {
    const ceramic = new Ceramic(CERAMIC_URL);
    window.idx = new IDX({ ceramic });
    window.ceramic = ceramic;
  }
};
