import { useQuery } from 'react-query';
import { NonFungibleTokens } from '../../../api/NonFungibleTokens';
import { NftRawMetadataProps } from '../../../types/NFTProps';
import { useParams } from 'react-router-dom';
import { fetchNftJson, getCidImage } from '../../Web3/Ipfs';

export const useNFTs = () => {
  const { userId } = useParams<{ userId: string }>();
  const { getTitanNfts } = NonFungibleTokens();
  const nftsQuery = useQuery('nfts', () => fetchNfts(), {enabled: userId !== undefined});

  const refetchNFTs = () => {
    nftsQuery.refetch();
  };

  const getNftMetaData = async (contentUri: string, tokenId: number) => {
    const metadata: NftRawMetadataProps = await fetchNftJson(contentUri);

    return {
      name: metadata.name,
      tokenId: tokenId,
      image: await getCidImage(metadata.image),
      description: metadata.description,
      attributes: metadata.attributes,
    };
  };

  const fetchNfts = async () => {
    const nftsRawData = await getTitanNfts(userId);
    const nftsData = nftsRawData.data.nfts.map((nft) => ({ contentURI: nft.contentURI, tokenId: nft.tokenID }));
    const nftsMetadata = nftsData.map(async (data) => await getNftMetaData(data.contentURI, data.tokenId));
    return await Promise.all(nftsMetadata);
  };

  return {
    refetchNFTs,
    nftsQuery,
  };
};