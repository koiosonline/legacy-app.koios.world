// import nftTitanContractABI from '../../contracts/polygon/NFTTitanContractABIPolygon';
// import tokenTitanContractABI from '../../contracts/polygon/TokenTitanContractABIPolygon';
import nftTitanContractABI from '../../contracts/polygon/nft-titan-contract-abi-polygon.json';
import tokenTitanContractABI from '../../contracts/polygon/token-titan-contract-abi-polygon.json';
import { AbiItem } from 'web3-utils';
import { Dispatch, SetStateAction } from 'react';
import { Web3InstanceProps } from '../../types/Web3InstanceProps';

export const mintToken = async (
  web3: Web3InstanceProps,
  currentAccount: string,
  setIsMinting: Dispatch<SetStateAction<boolean>>,
  setTransactionHash: Dispatch<SetStateAction<string>>,
  refetchNFTs: () => void
) => {
  setIsMinting(true);
  const contractAddress = process.env.REACT_APP_TITAN_NFT_CONTRACT_ADDRESS_POLYGON;
  const tokenAddress = process.env.REACT_APP_TITAN_TOKEN_CONTRACT_ADDRESS_POLYGON;
  const contract = await new web3.eth.Contract(nftTitanContractABI as AbiItem[], contractAddress as string);
  const tokenContract = await new web3.eth.Contract(tokenTitanContractABI as AbiItem[], tokenAddress as string);

  const contractAllowance = await tokenContract.methods.allowance(currentAccount, contractAddress).call();
  const contractAllowedByUser = contractAllowance >= 1;
  const amountToPay = BigInt(10 ** 18);

  const mint = () => {
    contract.methods
      .mint()
      .send({ from: currentAccount, maxPriorityFeePerGas: null, maxFeePerGas: null })
      .on('error', () => {
        setIsMinting(false);
      })
      .on('transactionHash', (transactionHash: string) => {
        setTransactionHash(transactionHash);
      })
      .on('confirmation', (confirmationNumber: number) => {
        if (confirmationNumber === 0) {
          setIsMinting(false);
          refetchNFTs();
        }
      })
      .then(() => {
        setTransactionHash('n/a');
      });
  };

  try {
    if (!contractAllowedByUser) {
      await tokenContract.methods
        .approve(contractAddress, amountToPay)
        .send({ from: currentAccount, maxPriorityFeePerGas: null, maxFeePerGas: null });
      mint();
    } else {
      mint();
    }
  } catch (e) {
    setIsMinting(false);
  }
};
