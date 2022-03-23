import { fetchJson, getCidImage } from '../components/Web3/Ipfs';

type NftObject = {
  contentURI: string;
  from: string;
  id: string;
  to: string;
};

type NftDataProps = {
  data: {
    nfts: NftObject[];
  };
};

const fetchNFTData = async (contentUri: string) => {
  const nftMetadata = await fetchJson(contentUri);
  const nftImage = await getCidImage(nftMetadata.image);
  const nftAttributes = nftMetadata.attributes.find((attribute) => attribute);

  return {
    name: nftMetadata.name,
    image: nftImage,
    description: nftMetadata.description,
    value: nftAttributes.value,
  };
};

export const getNFTs = async (authenticatedPublicKey: string) => {
  const url = 'https://api.thegraph.com/subgraphs/name/koiosonline/titan-nft-rinkeby';
  const getQuery = (authenticatedPublicKey: string) => {
    return `
    {
      nfts(where: {owner: "${authenticatedPublicKey.toLowerCase()}"}) {
        id
        contentURI
        to
        from
      }
    }
    `;
  };

  const body = JSON.stringify({ query: getQuery(authenticatedPublicKey) });
  const response = await fetch(url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: body,
  });
  const content: NftDataProps = await response.json();
  
  const contentUris = content.data.nfts.map((nft) => nft.contentURI);
  const fetchedNFTData = contentUris.map(async (contentUri) => await fetchNFTData(contentUri));
  const nfts = await Promise.all(fetchedNFTData);

  return nfts;
};
