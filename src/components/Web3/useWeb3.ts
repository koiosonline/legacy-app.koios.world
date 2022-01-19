import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { UserContext } from "../../Context/UserContext";
import { web3Modal } from "./WalletProvider";
import { getUserAccount } from "../UserProfile/getUserAccount";
import { getDIDAuthenticated } from "../UserProfile/getDIDAuthenticated";
import { getDecentralizedProfile } from "../UserProfile/getDecentralizedProfile";
import { mapUserData } from "../UserProfile/mapUserData";
import { getDiscordProfile } from "../../api/Api";
import { getTitanTokenCount } from "../UserProfile/getTitanTokenCount";


export const useWeb3 = () => {
  const { setIsAuthenticating, isAuthenticated, setIsAuthenticated, setAuthError, provider, setProvider } = useContext(AuthContext);
  const { userAccount, setUserAccount } = useContext(UserContext);

  const connectWallet = async () => {
    try {
      setIsAuthenticating(true);
      const provider = await web3Modal.connect();
      setProvider(provider);
      const accountAddress = await getUserAccount(provider);
      await getDIDAuthenticated(accountAddress, provider); 
      const decentralizedProfile = await getDecentralizedProfile(accountAddress);
      const titanTokenCount = await getTitanTokenCount(accountAddress);
      const discordUsername = await decentralizedProfile.url;
      const discordProfile = await getDiscordProfile(discordUsername);
      const userProfile = await mapUserData(accountAddress, decentralizedProfile, titanTokenCount, discordProfile[0]);
      setUserAccount(userProfile);
      setIsAuthenticated(true);
      setIsAuthenticating(false); 
    } catch (e) {
      console.log(e);
      setAuthError(e);
    }
  };


  const disconnectWallet = async () => {
    if (isAuthenticated && provider) {
      await web3Modal.clearCachedProvider();
      setIsAuthenticated(false);
    }

    localStorage.removeItem(userAccount?.publicKey + "authenticated");
    setUserAccount(null);
  };

  return {
    connectWallet,
    disconnectWallet,
  };
};
