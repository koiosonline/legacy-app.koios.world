import { Authenticated } from "./Authenticated";
import { NotAuthenticated } from "./NotAuthenticated";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export const Profile = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Authenticated /> : <NotAuthenticated />;
};
