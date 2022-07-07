import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
import ListItem from "./ListItem";

function Card({ image, title, subTitle }) {
  return (
    <View style={styles.main}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    margin: 15,
    marginTop: 100,
  },
  detailsContainer: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 200,
    overflow: "hidden",
  },
  subTitle: {
    color: colors.secondary,
    marginTop: 7,
  },
  main: {
    backgroundColor: "#f8f4f4",
  },
});

export default Card;
