import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    image: require("../assets/jacket.jpg"),
    title: "Red jacket for sale",
    price: "$100",
  },
  {
    image: require("../assets/couch.jpg"),
    title: "Couch in great condition",
    price: "$1000",
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={({ title }) => title}
        renderItem={({ item }) => (
          <Card image={item.image} title={item.title} subTitle={item.price} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
    paddingTop: 50,
  },
});

export default ListingsScreen;
