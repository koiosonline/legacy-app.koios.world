import { AddNetworkToWallet } from './AddNetworkToWallet';

export const AutoNetworkSwitch = async (provider) => {
  const rinkebyChainId = '0x4';

  try {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: rinkebyChainId }],
    });
    console.log('You have succefully switched to Rinkeby Test network');
  } catch (switchNetworkError) {

    // This error code indicates that the chain has not been added to MetaMask.
    if (switchNetworkError.code === 4902) {
      console.log('This network is not available in your metamask, please add it');
      await AddNetworkToWallet(provider);
    }

    console.log('Failed to switch to the network');
    throw switchNetworkError.message;
  }
};
