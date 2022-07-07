import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Constants from "expo-constants";

function Screen({ children }) {
  return <SafeAreaView style={styles.restrict}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  restrict: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
