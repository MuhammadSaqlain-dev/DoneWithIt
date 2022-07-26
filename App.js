import React, { useEffect, useState } from "react";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screen/ListingEditScreen";

// import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}
