import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import { AppForm, AppFormField } from "../components/form/index";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name={"email"}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          icon={"email"}
          placeholder={"Email"}
          textContentType="emailAddress"
        />
        <AppFormField
          name={"password"}
          autoCapitalize="none"
          autoCorrect={false}
          icon={"lock"}
          textContentType="password"
          placeholder={"Password"}
          secureTextEntry={true}
        />

        <SubmitButton text={"enter"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default LoginScreen;
