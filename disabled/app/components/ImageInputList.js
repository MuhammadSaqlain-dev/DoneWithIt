import React, { useRef } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import Screen from "./Screen";
import ImageInput from "./ImageInput";

function ImageImageList({ imageUris = [], onAddImage, onDeleteImage }) {
  const scrollView = useRef();

  return (
    <ScrollView
      ref={scrollView}
      horizontal
      onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      <View style={{ flexDirection: "row" }}>
        {imageUris.map((uri) => (
          <View key={uri} style={{ marginRight: 10 }}>
            <ImageInput uri={uri} onChangeImage={onDeleteImage} />
          </View>
        ))}
        <ImageInput onChangeImage={onAddImage} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default ImageImageList;
