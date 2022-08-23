import { useEffect } from "react";
import { Platform } from "react-native";
import * as Notifications from "expo-notifications";

import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotification();
    configNotifications();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotification = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) return null;

      const { data: token } = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error while getting push token: ", error);
    }
  };

  const configNotifications = async () => {
    // Handling the notification
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldPlaySound: true,
        shouldShowAlert: true,
        shouldSetBadge: false,
      }),
    });

    // Creating Channel for android
    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.HIGH,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  };
};
