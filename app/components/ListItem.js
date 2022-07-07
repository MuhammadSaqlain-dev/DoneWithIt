import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ image, title, subTitle }) {
  return (
    <TouchableHighlight
      underlayColor={colors.light}
      onPress={() => console.log("")}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
