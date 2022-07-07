import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.imgBg}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>sell what you don't need</Text>
      </View>

      <View style={styles.btnContainer}>
        <AppButton text="login" />
        <AppButton text="register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    padding: 15,
  },
  imgBg: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10,
  },
});

export default WelcomeScreen;
