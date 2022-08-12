import React from "react";
import { View, StyleSheet, Modal, AsyncStorage } from "react-native";
import * as Progress from "react-native-progress";
import AnimatedLottieView from "lottie-react-native";

import AppText from "../components/Text";
import colors from "../config/colors";

function UploadScreen({ onDone, progress, visible }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            width={200}
            color={colors.primary}
            progress={progress}
          />
        ) : (
          <AnimatedLottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});

export default UploadScreen;
