import Web3 from 'web3';

// const rinkebyChain = {
//   chainId: '0x4',
//   chainName: 'Ethereum Rinkeby Testnet RPC',
//   rpcUrls: ['https://rinkey.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
//   blockExplorerUrls: ['https://rinkey.etherscan.io'],
//   nativeCurrency: {
//     symbol: 'ETH',
//     decimals: 18,
//   },
// };

const polygonChain = {
  chainId: Web3.utils.toHex('137'),
  chainName: 'Polygon Mainnet',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: ['https://polygon-rpc.com'],
  blockExplorerUrls: ['https://polygonscan.com']
};

export const AddNetworkToWallet = async (provider) => {
  try {
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [polygonChain],
    });
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: polygonChain.chainId }],
    });

  } catch (e) {
    throw e.message;
  }
};
