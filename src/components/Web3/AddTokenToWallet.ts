export async function AddTokenToWallet(provider) {
  const tokenAddress = process.env.REACT_APP_TITAN_COIN_CONTRACT_ADDRESS_POLYGON;
  const tokenSymbol = 'Titan';
  const tokenDecimals = 18;
  const tokenImage = 'https://raw.githubusercontent.com/koiosonline/app.koios.world/main/public/images/koios-icon.svg';

  try {
    await provider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: tokenImage,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
}