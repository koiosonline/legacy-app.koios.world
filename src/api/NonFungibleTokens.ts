import { NftDataProps } from "../types/NFTProps";
import { getTitanNftsQuery } from "./queries/getTitanNftsQuery";

export const NonFungibleTokens = () => {

  const getTitanNfts = async (authenticatedPublicKey: string) => {
    const url = 'https://api.thegraph.com/subgraphs/name/koiosonline/titan-nft-polygon';
    const query = getTitanNftsQuery(authenticatedPublicKey);
    const body = JSON.stringify({ query });

    const response = await fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    });
    const content: NftDataProps = await response.json();
    return content;
  };

  return {
    getTitanNfts
  };
};
