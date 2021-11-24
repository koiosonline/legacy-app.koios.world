import { Authenticated } from "./Authenticated";
import { NotAuthenticated } from "./NotAuthenticated";
import { useWeb3 } from "../../components/Web3/useWeb3";

export const Profile = () => {
  const { isAuthenticated } = useWeb3();
  return isAuthenticated ? <Authenticated /> : <NotAuthenticated />;
};
