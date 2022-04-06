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
  chainId: '137',
  chainName: 'Polygon',
  rpcUrls: ['https://polygon-rpc.com'],
  blockExplorerUrls: ['https://polygonscan.com/'],
  nativeCurrency: {
    symbol: 'MATIC',
    decimals: 18,
  },
};

export const AddNetworkToWallet = async (provider) => {
  try {
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [polygonChain],
    });
  } catch (addNetworkError) {
    console.log(addNetworkError);
    throw addNetworkError.message;
  }
};
