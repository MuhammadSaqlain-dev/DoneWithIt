import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted-square",
      backgroundColor: colors.danger,
    },
  },
  {
    title: "My Account",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={{ marginVertical: 20 }}>
        <ListItem
          image={require("../assets/saqlain.png")}
          title={"Muhammad Saqlain"}
          subTitle={"2mesaqlain@gmail.com"}
        />
      </View>

      <View style={{ marginVertical: 20 }}>
        <FlatList
          data={menuItems}
          keyExtractor={({ title }) => title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              imagePlaceholder={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <View>
        <ListItem
          title={"Log Out"}
          imagePlaceholder={
            <Icon name={"logout"} backgroundColor={"#ffe66d"} />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profileBackground: {
    backgroundColor: colors.white,
    marginTop: 28,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  infoBackground: {
    marginBottom: 30,
    backgroundColor: colors.white,
  },
});

export default AccountScreen;
