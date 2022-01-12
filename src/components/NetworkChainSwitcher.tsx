import { provider } from "./Web3/Web3--old";

// const supportedNetworks = [
//   {
//     chainId: '137',
//     chainName: 'Polygon',
//     rpcUrls: ['https://polygon-rpc.com']
//   },
//   {
//     chainId: '4',
//     chainName: 'Rinkeby',
//     rpcUrls: ['https://rinkey.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161']
//   }
// ];

export const NetworkChainSwitcher = async () => {
  const ethereum = provider.ethereum;
  
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0xf00' }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0xf00',
              chainName: '...',
              rpcUrls: ['https://...'] /* ... */,
            },
          ],
        });
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }
};
