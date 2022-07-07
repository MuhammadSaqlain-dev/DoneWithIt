import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function AppButton({ text, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <AppText style={styles.text}>{text}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    textTransform: "uppercase",
    fontWeight: "700",
  },
});

export default AppButton;
