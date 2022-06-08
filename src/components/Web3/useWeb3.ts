import Web3 from 'web3';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { UserContext } from '../../Context/UserContext';
import { web3Modal } from './WalletProvider';
import { getUserAccount } from '../UserProfile/getUserAccount';
import { getDIDAuthenticated } from '../UserProfile/getDIDAuthenticated';
import { getDecentralizedProfile } from '../UserProfile/getDecentralizedProfile';
import { mapUserData } from '../UserProfile/mapUserData';
import { getDiscordProfile } from '../../api/Api';
import { autoNetworkSwitch } from './AutoNetworkSwitch';
import { useCoinContract } from '../../Web3/hooks/useTitanCoinContract';

export const useWeb3 = () => {
  const { setIsAuthenticating, isAuthenticated, setIsAuthenticated, setAuthError, provider, setProvider, setWeb3 } =
    useContext(AuthContext);
  const { userAccount, setUserAccount } = useContext(UserContext);
  const { getUserBalance } = useCoinContract();

  const connectWallet = async () => {
    try {
      setAuthError(false);
      setIsAuthenticating(true);
      const provider = await web3Modal.connect();
      await autoNetworkSwitch(provider);
      setProvider(provider);
      const web3 = new Web3(provider);
      setWeb3(web3);
      const accountAddress = await getUserAccount(web3);
      await getDIDAuthenticated(accountAddress, provider);
      await getUserProfile(accountAddress);
      setIsAuthenticated(true);
      setIsAuthenticating(false);
    } catch (e) {
      console.log(e);
      web3Modal.clearCachedProvider();
      setIsAuthenticating(false);
      setAuthError(e);
    }
  };

  const disconnectWallet = async () => {
    if (isAuthenticated && provider) {
      await web3Modal.clearCachedProvider();
      setIsAuthenticated(false);
    }

    localStorage.removeItem(userAccount?.publicKey + 'authenticated');
    setUserAccount(null);
  };

  const getUserProfile = async (accountAddress: string) => {
    try {
      const decentralizedProfile = await getDecentralizedProfile(accountAddress);
      const userBalance = await getUserBalance(accountAddress);
      const discordUsername = decentralizedProfile?.url;
      const discordProfile = await getDiscordProfile(discordUsername);
      const userProfile = await mapUserData(
        accountAddress,
        decentralizedProfile,
        userBalance,
        discordUsername,
        discordProfile
      );
      setUserAccount(userProfile);
    } catch (e) {
      throw new Error(e);
    }
  };

  return {
    connectWallet,
    disconnectWallet,
    getUserProfile,
  };
};
