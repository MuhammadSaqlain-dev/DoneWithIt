import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.restrict, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  restrict: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
