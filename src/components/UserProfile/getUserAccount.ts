export const getUserAccount = async (web3) => {
  const accounts = await web3.eth.getAccounts();
  const currentAccount = accounts[0];
  return currentAccount;
};
