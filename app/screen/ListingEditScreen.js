import React from "react";
import * as Yup from "yup";

import AppFormPicker from "../components/AppFormPicker";
import { AppForm, AppFormField } from "../components/form";
import SubmitButton from "../components/SubmitButton";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const category = [
  { title: "Camera", value: 1 },
  { title: "Furniture", value: 2 },
  { title: "Clothing", value: 3 },
  { title: "Grocery", value: 4 },
];

// I cannot log fieldValues due to category Field

function ListingEditScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name={"title"} placeholder={"Title"} maxLength={255} />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
        />
        <AppFormPicker
          items={category}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          name="description"
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLines={3}
        />
        <SubmitButton text="Post" />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;
