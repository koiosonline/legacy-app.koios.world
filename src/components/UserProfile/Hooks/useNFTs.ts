import { useContext } from 'react';
import { useQuery } from 'react-query';
import { NonFungibleTokens } from '../../../api/NonFungibleTokens';
import { UserContext } from '../../../Context/UserContext';
import { NftRawMetadataProps } from '../../../types/NFTProps';
import { fetchJson, getCidImage } from '../../Web3/Ipfs';

export const useNFTs = () => {
  const { userAccount } = useContext(UserContext);
  const { getTitanNfts } = NonFungibleTokens();
  const nftsQuery = useQuery('nfts', () => fetchNfts());

  const refetchNFTs = () => {
    nftsQuery.refetch();
  };

  const getNftMetaData = async (contentUri: string, tokenId: number) => {
    const metadata: NftRawMetadataProps = await fetchJson(contentUri);

    return {
      name: metadata.name,
      tokenId: tokenId,
      image: await getCidImage(metadata.image),
      description: metadata.description,
      attributes: metadata.attributes,
    };
  };

  const fetchNfts = async () => {
    const nftsRawData = await getTitanNfts(userAccount.publicKey);
    const nftsData = nftsRawData.data.nfts.map((nft) => ({ contentURI: nft.contentURI, tokenId: nft.tokenID }));
    const nftsMetadata = nftsData.map(async (data) => await getNftMetaData(data.contentURI, data.tokenId));
    return await Promise.all(nftsMetadata);
  };

  return {
    refetchNFTs,
    nftsQuery,
  };
};