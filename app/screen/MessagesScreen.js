import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
// import Constants from "expo-constants";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const originalMessages = [
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
  let [messages, setMessages] = useState(originalMessages);
  let [refreshing, setRefreshing] = useState(false);

  const handleOnPress = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleOnPress(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(originalMessages);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
