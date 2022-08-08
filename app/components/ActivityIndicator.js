import React from "react";
import AnimatedLottieView from "lottie-react-native";

function ActivityIndicator({ visible }) {
  if (!visible) return null;
  return (
    <AnimatedLottieView
      source={require("../assets/animations/loader.json")}
      autoPlay
      loop
    />
  );
}

export default ActivityIndicator;
