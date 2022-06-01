export const useProvider = () => {
  const polygonProvider = () => {
    const provider = `https://polygon-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_API_KEY_POLYGON}`;
    return provider;
  };

  const rinkebyProvider = () => {
    const provider = `https://eth-rinkeby.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_API_KEY_RINKEBY}`;
    return provider;
  };

  return {
    polygonProvider,
    rinkebyProvider,
  };
};
