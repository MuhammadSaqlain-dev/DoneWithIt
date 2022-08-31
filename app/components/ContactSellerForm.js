import React from "react";
import { Alert, Keyboard } from "react-native";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "./forms";
import messagesApi from "../api/messages";
import * as Notifications from "expo-notifications";
import logger from "../utility/logger";

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      logger.log("Error while sending message: ", result);
      return Alert.alert("Error", "Could'nt sent the message to the seller.");
    }

    resetForm();
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Congrats!",
        body: "Your message has been send to the seller.",
      },
      trigger: {
        seconds: 1,
      },
    });
  };

  return (
    <Form
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField
        maxLength={255}
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="contact seller" />
    </Form>
  );
}

const validationSchema = Yup.object({
  message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;
