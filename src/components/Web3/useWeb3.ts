import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { UserContext } from "../../Context/UserContext";
import { web3Modal } from "./WalletProvider";
import { getUserAccount } from "./getUserAccount";
import { getDIDAuthenticated } from "./getDIDAuthenticated";
import { getUserProfile } from "./getUserProfile";

export const useWeb3 = () => {
  const { setIsAuthenticating, isAuthenticated, setIsAuthenticated, setAuthError } = useContext(AuthContext);
  const { provider, setProvider, userAccount, setUserAccount } = useContext(UserContext);

  const connectWallet = async () => {
    try {
      setIsAuthenticating(true);
      const provider = await web3Modal.connect();
      const accountAddress = await getUserAccount(provider);
      await getDIDAuthenticated(accountAddress, provider); 
      const userProfile = await getUserProfile(accountAddress);
      setProvider(provider);
      setUserAccount(accountAddress);
      setIsAuthenticated(true);
      setIsAuthenticating(false);
      console.log(userProfile);
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

    localStorage.removeItem(userAccount);
    localStorage.removeItem(userAccount + "authenticated");
    setUserAccount(null);
  };

  return {
    connectWallet,
    disconnectWallet,
  };
};
