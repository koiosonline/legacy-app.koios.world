export const getTitanNftsQuery = (authenticatedPublicKey: string) => {
  return `
{
  nfts(where: {owner: "${authenticatedPublicKey.toLowerCase()}"}) {
    id
    tokenID
    contentURI
    to
    from
  }
}
`;
};
