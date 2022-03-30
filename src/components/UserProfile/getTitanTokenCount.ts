import { GetTokenHoldersJSON } from '../Web3/GraphQueries';
import { fetchJson, getCidImage } from '../Web3/Ipfs';
import titanTokenPlaceholder from '../../assets/images/placeholders/placeholder-titan-token.png';

export const getTitanTokenCount = async (accountAddress: string) => {
  const tokenHolders = await GetTokenHoldersJSON();
  const userBalanceData = tokenHolders?.data?.users?.find((user) => user.address === accountAddress.toLowerCase());
  const tokenCount = userBalanceData?.balance || 0;
  const contentURI = await fetchJson(userBalanceData?.contentURI);
  const tokenImage = (await getCidImage(contentURI?.image)) || titanTokenPlaceholder;

  return {
    balance: Math.round(tokenCount / 10 ** 18),
    tokenIcon: tokenImage,
  };
};
