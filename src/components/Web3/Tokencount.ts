import LeaderboardAddresses from "./static/addresses.json";
import { fetchImage, fetchJson } from "./Ipfs";
import { FindProfile } from "./Profiles";
import { selectedAccount } from "./Web3";
import { GetTokenHoldersJSON } from "./GraphQueries";

export const getTokenCountTDFA = async () => {
  const tokenholders = await GetTokenHoldersJSON();
  const tokenholdersTDFA: any = [];
  const usernamePromises: any = [];

  let i = 1;
  const tdfaAddresses: string[] = await stringArrayToLowerCase(LeaderboardAddresses.tdfaAddresses);
  for (const user of tokenholders.data.users) {
    if (tdfaAddresses.includes(user.address)) {
      if (user.address === selectedAccount?.toLowerCase()) {
        const entry = {
          address: user.address,
          balance: Math.round(user.balance / 10 ** 18),
          image: "default",
          index: i,
          selectedAccount: true,
        };
        tokenholdersTDFA.push(entry);
        i++;
      } else {
        const entry = {
          address: user.address,
          balance: Math.round(user.balance / 10 ** 18),
          image: "default",
          index: i,
          selectedAccount: false,
        };
        tokenholdersTDFA.push(entry);
        i++;
      }
    }
  }

  for (let i = 10; i < tokenholdersTDFA.length; i++) {
    if (!tokenholdersTDFA[i].selectedAccount) {
      tokenholdersTDFA.splice(i, 1);
      i--;
    }
  }

  for (const user of tokenholdersTDFA) {
    const usernamePromise = FindProfile(user.address);
    usernamePromises.push(usernamePromise);
  }
  await Promise.all(usernamePromises).then(async (values: any) => {
    for (let i = 0; i < values.length; i++) {
      if (values[i] !== undefined) {
        tokenholdersTDFA[i].address = values[i].name;
        if (values[i].image !== undefined) {
          tokenholdersTDFA[i].image = await fetchImage(values[i].image);
        }
      }
    }
  });

  return tokenholdersTDFA;
};

export const getTokenCountBlockchain = async () => {
  const tokenholders = await GetTokenHoldersJSON();
  const tokenholdersBlockchain: any = [];
  const usernamePromises: any = [];

  let i = 1;
  const blockchainAddresses: string[] = await stringArrayToLowerCase(LeaderboardAddresses.blockchainAddresses);
  for (const user of tokenholders.data.users) {
    if (blockchainAddresses.includes(user.address)) {
      if (user.address === selectedAccount?.toLowerCase()) {
        const entry = {
          address: user.address,
          balance: Math.round(user.balance / 10 ** 18),
          image: "default",
          index: i,
          selectedAccount: true,
        };
        tokenholdersBlockchain.push(entry);
        i++;
      } else {
        const entry = {
          address: user.address,
          balance: Math.round(user.balance / 10 ** 18),
          image: "default",
          index: i,
          selectedAccount: false,
        };
        tokenholdersBlockchain.push(entry);
        i++;
      }
    }
  }

  for (let i = 10; i < tokenholdersBlockchain.length; i++) {
    if (!tokenholdersBlockchain[i].selectedAccount) {
      tokenholdersBlockchain.splice(i, 1);
      i--;
    }
  }

  for (const user of tokenholdersBlockchain) {
    const usernamePromise = FindProfile(user.address);
    usernamePromises.push(usernamePromise);
  }
  await Promise.all(usernamePromises).then(async (values: any) => {
    for (let i = 0; i < values.length; i++) {
      if (values[i] !== undefined) {
        tokenholdersBlockchain[i].address = values[i].name;
        if (values[i].image !== undefined) {
          tokenholdersBlockchain[i].image = await fetchImage(values[i].image);
        }
      }
    }
  });

  return tokenholdersBlockchain;
};

export const getTokenCountOverall = async () => {
  const tokenholders = await GetTokenHoldersJSON();
  const tokenholdersOverall: any = [];
  const usernamePromises: any = [];
  const exclusions: string[] = await stringArrayToLowerCase(LeaderboardAddresses.leaderboardExclusions);
  let i = 1;

  for (const user of tokenholders.data.users) {
    if (!exclusions.includes(user.address)) {
      if (user.address === selectedAccount?.toLowerCase()) {
        const entry = {
          address: user.address,
          balance: Math.round(user.balance / 10 ** 18),
          index: i,
          selectedAccount: true,
          image: "default",
        };
        tokenholdersOverall.push(entry);
        i++;
      } else {
        const entry = {
          address: user.address,
          balance: Math.round(user.balance / 10 ** 18),
          index: i,
          selectedAccount: false,
          image: "default",
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

  for (const user of tokenholdersOverall) {
    const usernamePromise = FindProfile(user.address);
    usernamePromises.push(usernamePromise);
  }
  await Promise.all(usernamePromises).then(async (values: any) => {
    for (let i = 0; i < values.length; i++) {
      if (values[i] !== undefined) {
        tokenholdersOverall[i].address = values[i].name;
        if (values[i].image !== undefined) {
          tokenholdersOverall[i].image = await fetchImage(values[i].image);
        }
      }
    }
  });

  return tokenholdersOverall;
};

export const ProfileTokenInformation = async () => {
  const tokenHolders = await GetTokenHoldersJSON();
  const resultArray: any = [];
  for (const user of tokenHolders.data.users) {
    if (selectedAccount) {
      if (selectedAccount.toLowerCase() === user.address) {
        const contentURI = await fetchJson(user.contentURI);
        const symbol = user.symbol;
        const balance = Math.round(user.balance / 10 ** 18);
        const entry = { symbol: symbol, balance: balance, image: await fetchImage(contentURI.image) };
        resultArray.push(entry);
      }
    }
  }
  return resultArray;
};

const stringArrayToLowerCase = async (array: string[]) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
  }
  return array;
};
