import "./App.css";
import Input from "./Input";
import fields from "../fields.json";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "./app/typehooks";
import { submitForm } from "./app/formSlice";
import { useState } from "react";
import ThankYouPage from "./ThankYouPage";
import * as yup from "yup";
import { Field } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";

const validationObjet: {
  [key: string]: yup.StringSchema<string, yup.AnyObject, undefined, "">;
} = {};

fields.flat().forEach((field: Field) => {
  let validationField: yup.StringSchema<string, yup.AnyObject, undefined, "">;
  if (field.id === "email") {
    validationField = yup.string().email() as yup.StringSchema<
      string,
      yup.AnyObject,
      undefined,
      ""
    >;
    if (field.required) {
      validationField = validationField.required();
    }
    validationObjet[field.id] = validationField;
  } else if (field.id === "phone") {
    validationField = yup
      .string()
      .matches(
        /^[0-9]{10}$/,
        "The phone number must be 10 numeric digits"
      ) as yup.StringSchema<string, yup.AnyObject, undefined, "">;
    if (field.required) {
      validationField = validationField.required();
    }
    validationObjet[field.id] = validationField;
  } else if (field.required) {
    validationField = yup.string().required();
    validationObjet[field.id] = validationField;
  }
});

const formValidationSchema = yup.object().shape(validationObjet);

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidationSchema),
  });
  const [isSubmited, setIsSubmited] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className="container">
      {!isSubmited ? (
        <>
          <h1>Command Link Form</h1>
          <form
            className="container"
            onSubmit={handleSubmit((formValues) => {
              dispatch(submitForm(formValues)), setIsSubmited(true);
            })}
          >
            {fields.map((field, index) => {
              if (Array.isArray(field)) {
                return (
                  <div key={index} className="rowcontainer">
                    {field.map((columField, index) => {
                      return (
                        <Input
                          errors={errors}
                          register={register}
                          field={columField}
                          key={index}
                        ></Input>
                      );
                    })}
                  </div>
                );
              } else {
                return (
                  <Input
                    errors={errors}
                    register={register}
                    field={field}
                    key={index}
                  ></Input>
                );
              }
            })}
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <ThankYouPage />
      )}
    </div>
  );
}

export default App;
