import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { useProvider } from './useProvider';
import abiCoinContract from '../../assets/contracts/polygon/abi-titan-coin-contract.json';

export const useCoinContract = () => {
  const { polygonProvider } = useProvider();
  const web3 = new Web3(polygonProvider());
  const contractAddress = "0xB49750AD82d11C12209A837210AB753AB09115a7";

  const getUserBalance = async (publicKey: string) => {
    const tokenInst = new web3.eth.Contract(abiCoinContract as AbiItem[], contractAddress as string);
    const balance = await tokenInst.methods.balanceOf(publicKey).call();
    const formattedBalance = balance / 10 ** 18;
    return formattedBalance;
  };

  return {
    getUserBalance,
  };
};
