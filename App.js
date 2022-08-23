import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authContext from "./app/auth/authContext";
import authStorage from "./app/auth/authStorage";
import { navigationRef } from "./app/navigation/rootNavigation";

import "./ignoreWarnings";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    restoreUser();
  }, []);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  return (
    <authContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </authContext.Provider>
  );
}
