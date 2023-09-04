import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { createUser, users } from "../data/users";

export const AuthChecker = () => {
  const { setUserAuth } = useContext(AuthContext);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const { username, email, phone, userType } = JSON.parse(user);
      users.push(createUser(username, email, phone, "", userType));
      setUserAuth((prev) => ({
        ...prev,
        isAuth: true,
        username: username,
        email: email,
        phone: phone,
        userType: userType,
      }));
    }
  }, [setUserAuth]);

  return <></>;
};
