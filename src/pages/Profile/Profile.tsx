import { Authenticated } from "./Authenticated";
import { Unauthenticated } from "./Unauthenticated";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export const Profile = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Authenticated /> : <Unauthenticated />;
};
