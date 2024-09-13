import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const userContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loginResult, setLoginResult] = useState(null);

  const loginCustomer = (formData) => {
    api.users.login(formData).then((data) => {
      setLoginResult(data);
      if (!data.success) {
      } else {
        setLoggedIn(true);
      }
      return data;
    });
  };

  const logoutCustomer = () => {
    api.users.logout().then((data) => {
      setLoggedIn(false);
      setUserData(null);
      localStorage.removeItem("token");
    });
  };

  useEffect(() => {
    api.users.isLoggedIn(true).then((data) => {
      if (data) {
        setLoggedIn(true);
        setUserData(data);
      }
    });
  }, [loggedIn, loginResult]);

  return (
    <userContext.Provider
      value={{
        loggedIn: loggedIn,
        setLoggedIn: setLoggedIn,
        userData: userData,
        loginCustomer: loginCustomer,
        logoutCustomer: logoutCustomer,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
