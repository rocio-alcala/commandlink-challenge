import "./App.css";
import Input from "./Input";
import fields from "../fields.json";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "./app/typehooks";
import { submitForm } from "./app/formSlice";
import ThankYouPage from "./ThankYouPage";
import * as yup from "yup";
import { Field } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";


function getValidationSchema(field: Field) {
  switch (field.type) {
    case "phone":
      return yup
        .string()
        .matches(/^[0-9]{10}$/, "The phone number must be 10 numeric digits");
    case "email":
      return yup
        .string()
        .email(`${field.label || field.id} must be a valid email`);
    default:
      return yup.string();
  }
}

function getValidationObject(fields: Field[]) {
  const entries = fields.map((field) => {
    let validationSchema = getValidationSchema(field);

    if (field.required) {
      validationSchema = validationSchema.required(
        `${field.label || field.id} is required`
      );
    }

    return [field.id, validationSchema];
  });

  return Object.fromEntries(entries);
}

const formValidationSchema = yup
  .object()
  .shape(getValidationObject(fields.flat()));

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formValidationSchema),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <>
      <nav>
        <img
          src="https://www.commandlink.com/wp-content/uploads/2021/12/CommandLink-Logo-White.png"
          alt="commandLink"
        ></img>
      </nav>
      <div className="container">
        <form
          noValidate
          className="formcontainer"
          onSubmit={handleSubmit((formValues) => {
            dispatch(submitForm(formValues)), setIsModalOpen(true), reset();
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
                      />
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
                />
              );
            }
          })}
          <button type="submit">Submit</button>
        </form>
        {isModalOpen ? <ThankYouPage setIsModalOpen={setIsModalOpen} /> : null}
      </div>
    </>
  );
}

export default App;
