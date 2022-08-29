export const FormatPublicKey = (publicKey: string) => {
  const firstCharacters = publicKey.slice(0, 4);
  const lastCharacters = publicKey.slice(publicKey.length - 4);
  return `${firstCharacters}...${lastCharacters}`;
};
