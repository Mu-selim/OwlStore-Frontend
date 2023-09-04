import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState({
    isAuth: false,
    username: "",
    email: "",
    phone: "",
    userType: "",
  });

  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
