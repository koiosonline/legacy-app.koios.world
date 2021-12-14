import Web3 from "web3";

export const getUserAccount = async (provider) => {
  const web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  const currentAccount = accounts[0];

  return currentAccount;
};
