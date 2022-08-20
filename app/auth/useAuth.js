import { useContext } from "react";
import jwtDecode from "jwt-decode";

import authContext from "./authContext";
import authStorage from "./authStorage";

export default useAuth = () => {
  const { user, setUser } = useContext(authContext);

  const LogIn = (token) => {
    console.log(token);
    const user = jwtDecode(token);
    setUser(user);
    authStorage.store(token);
  };

  const LogOut = async () => {
    setUser(null);
    await authStorage.remove();
  };

  return { user, LogOut, LogIn };
};
