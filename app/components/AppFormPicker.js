import React from "react";
import AppPicker from "./AppPicker";
import { useFormikContext } from "formik";

function AppFormPicker({ items, name, placeholder }) {
  const { values, setFieldValue } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        selectedItem={values[name]}
        onselectItem={(item) => setFieldValue(name, item.title)}
      />
    </>
  );
}

export default AppFormPicker;
