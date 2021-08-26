import LeaderboardAddresses from "./static/addresses.json";
import { fetchImage, fetchJson } from "./Ipfs";
import { FindProfile } from "./FindProfile";
import { selectedAccount, selectedProfile } from "./Web3";
import { GetTokenHoldersJSON } from "./GraphQueries";


export const getTokenCountTDFA = async () => {
  const tokenholders = await GetTokenHoldersJSON();
  const tokenholdersTDFA: any = [];
  let usernamePromises: any = [];

  let i = 1;
  let tdfaAddresses: string[] = await stringArrayToLowerCase(LeaderboardAddresses.tdfaAddresses);
  for (let user of tokenholders.data.users) {
    if (tdfaAddresses.includes(user.address)) {
      if (user.address == selectedAccount.toLowerCase()) {
        let entry = { "address": user.address, "balance": (Math.round(user.balance / 10 ** 18)), "image": "default", "index": i, "selectedAccount": true };
        tokenholdersTDFA.push(entry);
        i++
      } else {
        let entry = { "address": user.address, "balance": (Math.round(user.balance / 10 ** 18)), "image": "default", "index": i, "selectedAccount": false };
        tokenholdersTDFA.push(entry);
        i++
      }  
    }
  }

  for (let i = 10; i < tokenholdersTDFA.length; i++) {
    if (!tokenholdersTDFA[i].selectedAccount) {
      tokenholdersTDFA.splice(i, 1);
      i--;
    }
  }

  for (let user of tokenholdersTDFA) {
    var usernamePromise = FindProfile(user.address);
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
}

export const getTokenCountBlockchain = async () => {
  const tokenholders = await GetTokenHoldersJSON();
  const tokenholdersBlockchain: any = [];
  let usernamePromises: any = [];

  let i = 1;
  let blockchainAddresses: string[] = await stringArrayToLowerCase(LeaderboardAddresses.blockchainAddresses);
  for (let user of tokenholders.data.users) {
    if (blockchainAddresses.includes(user.address)) {
      if (user.address == selectedAccount?.toLowerCase()) {
        let entry = { "address": user.address, "balance": (Math.round(user.balance / 10 ** 18)), "image": "default", "index": i, "selectedAccount": true };
        tokenholdersBlockchain.push(entry);
        i++
      } else {
        let entry = { "address": user.address, "balance": (Math.round(user.balance / 10 ** 18)), "image": "default", "index": i, "selectedAccount": false };
        tokenholdersBlockchain.push(entry);
        i++
      }  
    }
  }

  for (let i = 10; i < tokenholdersBlockchain.length; i++) {
    if (!tokenholdersBlockchain[i].selectedAccount) {
      tokenholdersBlockchain.splice(i, 1);
      i--;
    }
  }

  for (let user of tokenholdersBlockchain) {
    var usernamePromise = FindProfile(user.address);
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
}

export const ProfileTokenInformation = async () => {
  const tokenHolders = await GetTokenHoldersJSON();
  let resultArray: any = [];
  for (let user of tokenHolders.data.users) {
    if (selectedAccount) {
      if (selectedAccount.toLowerCase() === user.address) {
        let contentURI = await fetchJson(user.contentURI);
        let symbol = user.symbol;
        let balance = Math.round(user.balance / 10 ** 18);
        let entry = { "symbol": symbol, "balance": balance, "image": await fetchImage(contentURI.image) };
        resultArray.push(entry);
      }
    }
  }
  return resultArray;
}

const stringArrayToLowerCase = async (array: string[]) => {
  for(let i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
  }
  return array;
}
