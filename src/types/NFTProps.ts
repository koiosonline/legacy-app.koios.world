type attribute = {
  trait_type: string;
  value: string;
}

export type NFTProps = {
  name: string;
  image: string;
  tokenId: number;
  description: string;
  attributes: attribute[];
};

export type NftRawMetadataProps = {
  name: string;
  image: string;
  edition: number;
  dna: string;
  description: string;
  attributes: attribute[];
}

type NftObject = {
  contentURI: string;
  from: string;
  id: string;
  to: string;
  tokenID: number;
};

export type NftDataProps = {
  data: {
    nfts: NftObject[];
  };
};