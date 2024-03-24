import { createContext, useState, useContext } from 'react';

// 1. Create a Context
const LoginContext = createContext();

// 2. Create a Context Provider
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

// 3. Create a custom hook to access the login context
export const useLogin = () => useContext(LoginContext);