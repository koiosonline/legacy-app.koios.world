import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = (props) => {
  const [provider, setProvider] = useState(null);
  const [userAccount, setUserAccount] = useState(null);

  const providerValue = {
    provider,
    setProvider,
    userAccount,
    setUserAccount
  };

  return (
    <UserContext.Provider value={providerValue}>
      {props.children}
    </UserContext.Provider>
  );
};
