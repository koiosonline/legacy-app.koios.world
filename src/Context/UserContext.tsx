import { createContext, useState } from "react";
import { UserAccount, UserAccountContext } from "../types/UserProfile/UserAccount";

export const UserContext = createContext<UserAccountContext>({} as UserAccountContext);

export const UserContextProvider: React.FC = (props) => {
  const [userAccount, setUserAccount] = useState<UserAccount>(null);

  const providerValue: UserAccountContext = {
    userAccount,
    setUserAccount
  };

  return (
    <UserContext.Provider value={providerValue}>
      {props.children}
    </UserContext.Provider>
  );
};
