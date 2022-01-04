import { GetTokenHoldersJSON } from "../Web3/GraphQueries";
import { fetchJson, getCidImage } from "../Web3/Ipfs";

// export const getTitanTokenCount = async (accountAddress: string) => {
//   const tokenHolders = await GetTokenHoldersJSON();
//   const resultArray: any = [];

//   for (const user of tokenHolders.data.users) {
//     if (accountAddress) {
//       if (accountAddress.toLowerCase() === user.address) {
//         const contentURI = await fetchJson(user.contentURI);
//         const symbol = user.symbol;
//         const balance = Math.round(user.balance / 10 ** 18);
//         const entry = { symbol: symbol, balance: balance, image: await getCidImage(contentURI.image) };
//         resultArray.push(entry);
//       }
//     }
//   }
//   return resultArray;
// };

export const getTitanTokenCount = async (accountAddress: string) => {
  const tokenHolders = await GetTokenHoldersJSON();
  const userBalance = tokenHolders.data.users.find((user) => user.address === accountAddress.toLowerCase());
  const contentURI = await fetchJson(userBalance.contentURI);

  return {
    balance: Math.round(userBalance.balance / 10 ** 18),
    tokenIcon: await getCidImage(contentURI.image)
  };
};