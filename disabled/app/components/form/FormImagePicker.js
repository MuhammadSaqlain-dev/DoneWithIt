import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }) {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  const imageUris = values[name];

  const handleAddImage = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleDeleteImage = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <View>
      <ImageInputList
        imageUris={imageUris}
        onDeleteImage={handleDeleteImage}
        onAddImage={handleAddImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
