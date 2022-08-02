import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.ListItemContainer}>
          <ListItem
            image={require("../assets/saqlain.png")}
            title={"Muhammad Saqlain"}
            subTitle={"7 Listings"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  ListItemContainer: {
    marginVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    marginVertical: 10,
  },
});

export default ListingDetailScreen;
