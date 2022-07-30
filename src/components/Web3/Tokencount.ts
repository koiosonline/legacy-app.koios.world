import LeaderboardAddresses from './static/addresses.json';
import { FormatPublicKey } from '../Util/FormatPublicKey';
import { GetTokenHoldersJSON } from './GraphQueries';

export const getTokenCountOverall = async (selectedAccount: string) => {
  const tokenholders = await GetTokenHoldersJSON();
  const tokenholdersOverall: any = [];
  // Exclude the distribution wallets, token contract and NFT whitelist address
  const exclusions: string[] = await stringArrayToLowerCase(LeaderboardAddresses.leaderboardExclusions);
  let i = 1;

  for (const user of tokenholders.data.users) {
    if (!exclusions.includes(user.address)) {
      if (user.address === selectedAccount?.toLowerCase()) {
        const entry = {
          address: FormatPublicKey(user.address),
          balance: Math.round(user.balance / 10 ** 18),
          index: i,
          selectedAccount: true,
          image: 'default',
        };
        tokenholdersOverall.push(entry);
        i++;
      } else {
        const entry = {
          address: FormatPublicKey(user.address),
          balance: Math.round(user.balance / 10 ** 18),
          index: i,
          selectedAccount: false,
          image: 'default',
        };
        tokenholdersOverall.push(entry);
        i++;
      }
    }
  }

  for (let i = 20; i < tokenholdersOverall.length; i++) {
    if (!tokenholdersOverall[i].selectedAccount) {
      tokenholdersOverall.splice(i, 1);
      i--;
    }
  }

  return tokenholdersOverall;
};

const stringArrayToLowerCase = async (array: string[]) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
  }
  return array;
};
