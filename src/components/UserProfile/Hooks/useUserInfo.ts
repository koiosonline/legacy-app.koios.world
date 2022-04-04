import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';

export const useUserInfo = () => {
  const { web3 } = useContext(AuthContext);

  const getUserBalance = async (tokenContractABI, tokenContractAddress, publicKey: string) => {
    const tokenInst = new web3.eth.Contract(tokenContractABI, tokenContractAddress);
    const balance = await tokenInst.methods.balanceOf(publicKey).call();
    const formattedBalance = balance / 10 ** 18;
    return formattedBalance;
  };

  return {
    getUserBalance,
  };
};
