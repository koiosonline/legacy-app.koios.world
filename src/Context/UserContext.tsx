import { createContext, useState } from "react";
import { UserAccount } from "../types/UserProfile/UserAccount";

export const UserContext = createContext(null);

export const UserContextProvider = (props) => {
  const [userAccount, setUserAccount] = useState<UserAccount>(null);

  const providerValue = {
    userAccount,
    setUserAccount
  };

  return (
    <UserContext.Provider value={providerValue}>
      {props.children}
    </UserContext.Provider>
  );
};
