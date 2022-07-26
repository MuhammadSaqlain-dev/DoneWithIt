// We will use it for listingEdit Screen
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/defaultStyles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, selectedItem, onselectItem, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={30}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{selectedItem || placeholder}</AppText>
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={30}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType={"slide"}>
        <FlatList
          data={items}
          keyExtractor={({ value }) => value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.title}
              onPress={() => {
                setModalVisible(false);
                onselectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  modalText: {
    padding: 20,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
