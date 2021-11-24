import { useContext } from "react";
import Web3 from "web3";
import { AuthContext } from "../../Context/AuthContext";
import { web3Modal } from "./WalletProvider";

// const getUserAccount = async (provider) => {
//   const web3 = new Web3(provider);
// };

export const useWeb3 = () => {
  const { isAuthenticating, setIsAuthenticating } = useContext(AuthContext);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  // const [isUnauthenticated, setIsUnauthenticated] = useState<boolean>();
  // const [userAccount, setUserAccount] = useState(undefined);

  const connectWallet = async () => {
    try {
      setIsAuthenticating(true);
      const provider = await web3Modal.connect();
      setIsAuthenticated(provider);

      // if (!userAccount) {
      //   const userAccountData = await getUserAccount(provider);
      //   setUserAccount(userAccountData);
      // }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(isAuthenticating);
  return { connectWallet, isAuthenticated, isAuthenticating };
};
