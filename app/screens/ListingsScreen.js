import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/Text";
import AppButton from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const { data, error, loading, request } = useApi(listingsApi.getListings);

  useEffect(() => {
    request();
  }, []);
  console.log(error);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Could'nt retrieve the listings.</AppText>
          <AppButton title={"Retry"} onPress={request} />
        </>
      )}

      <ActivityIndicator visible={loading} />
      <FlatList
        data={data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAIL, item)} // Passing Parameters
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
