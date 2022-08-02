import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  Image,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ uri, onChangeImage }) {
  useEffect(() => {
    getLibraryPermission();
  }, []);

  const getLibraryPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("Enable DoneWithIt to access your library.");
  };

  const handlePress = async () => {
    if (!uri) selectImage();
    else {
      Alert.alert("Confirm Delete", "Are you sure to delete this image.", [
        { text: "Yes", onPress: () => onChangeImage(uri) },
        { text: "No" },
      ]);
    }
  };

  const selectImage = async () => {
    try {
      const { uri, cancelled } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!cancelled) onChangeImage(uri);
    } catch (error) {
      console.log("Error while reading image: ", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!uri && (
          <MaterialCommunityIcons
            name="camera"
            size={45}
            color={colors.medium}
          />
        )}
        {uri && <Image style={styles.image} source={{ uri: uri }} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.light,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
