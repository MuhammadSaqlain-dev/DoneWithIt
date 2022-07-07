import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    name: "Muhammad Saqlain",
    description: "D1",
    image: require("../assets/saqlain.png"),
  },
  {
    id: 2,
    name: "Muhammad Saqlain",
    description: "D2",
    image: require("../assets/saqlain.png"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
