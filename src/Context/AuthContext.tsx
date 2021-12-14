import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>(null);
  const [provider, setProvider] = useState(null);

  const providerValue = {
    isAuthenticated,
    setIsAuthenticated,
    isAuthenticating,
    setIsAuthenticating,
    authError,
    setAuthError,
    provider,
    setProvider
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
