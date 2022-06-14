import Web3 from 'web3';
import { AddNetworkToWallet } from './AddNetworkToWallet';

export const autoNetworkSwitch = async (provider) => {
  // const chainId = '0x4'; // Rinkeby
  const chainId = Web3.utils.toHex('137'); // Polygon

  try {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chainId }],
    });
    console.log('You have succefully switched to Polygon Mainnet');
  } catch (switchNetworkError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchNetworkError.code === 4902) {
      console.log('This network is not available in your metamask, please add it');
      return await AddNetworkToWallet(provider);
      
    }
    throw switchNetworkError.message;
  }
};
