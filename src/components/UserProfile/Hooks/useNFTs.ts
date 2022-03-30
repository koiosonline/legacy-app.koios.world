import { useContext } from "react";
import { useQuery } from "react-query";
import { fetchNFTs } from "../../../api/fetchNFTs";
import { UserContext } from "../../../Context/UserContext";

export const useNFTs = () => {
  const { userAccount } = useContext(UserContext);
  const nftsQuery = useQuery('nfts', () => fetchNFTs(userAccount.publicKey));

  const getNFTs = () => {
    nftsQuery.refetch();
  };

  return {
    getNFTs,
    nftsQuery
  };
};
