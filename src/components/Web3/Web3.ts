import Web3 from "web3";
import { web3Modal } from './WalletProvider';
import { FindAuthenticatedProfile } from './Profiles';
import { fetchImage } from "./Ipfs";
import { authenticate } from "./Profiles";
import { useEffect } from "react";

export let provider;
export let selectedAccount;
export let selectedProfile;
export let profilePicture;
export let profileName;



const fetchAccountData = async () => {
  const web3 = new Web3(provider);

  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  await authenticate();
  selectedProfile = await FindAuthenticatedProfile(selectedAccount);
  if (selectedProfile.image) {
    profilePicture = await fetchImage(selectedProfile.image);
  }
  if (selectedProfile.name) {
    profileName = selectedProfile.name;
  }
}

export const connectWeb3 = async () => {
  try {
    provider = await web3Modal.connect();
    console.log(selectedAccount);
    if(!selectedAccount)
      await fetchAccountData();
  } catch (e) {
    console.log("Could not get a wallet connection", e);
  }
};

const firstRun = async () => {
  if (web3Modal.cachedProvider) {
    await connectWeb3();
  }
  }
  
  firstRun();

export const disconnectWeb3 = async () => {
  if (provider) {
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;
};