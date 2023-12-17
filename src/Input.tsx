import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Field } from "../types";
import "./Input.css";

interface InputProps {
  field: Field;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<Record<string, string>>;
}

export default function Input({ field, register, errors }: InputProps) {
  switch (field.type) {
    case "select":
      return (
        <div className="inputcontainer">
          <label className="input-label" htmlFor={field.id}>
            {field.label || field.id}{field.required?<span>*</span>:null}
          </label>
          <select
            {...register(field.id)}
            className="input-field"
            id={field.id}
            defaultValue=""
          >
            <option value="" disabled>
              {field.placeholder}
            </option>
            {field.options?.map((selectOption, index) => (
              <option key={index} value={selectOption}>
                {selectOption}
              </option>
            ))}
          </select>
          {errors[field.id] ? (
            <p className="error">{errors[field.id]?.message}</p>
          ) : null}
        </div>
      );

    case "textarea":
      return (
        <div className="inputcontainer">
          <label className="input-label" htmlFor={field.id}>
            {field.label || field.id}{field.required?<span>*</span>:null}
          </label>
          <textarea
            {...register(field.id)}
            className="input-field"
            id={field.id}
            placeholder={field.placeholder && field.placeholder}
          />
          {errors[field.id] ? (
            <p className="error">{errors[field.id]?.message}</p>
          ) : null}
        </div>
      );

    default:
      return (
        <div className="inputcontainer">
          <label className="input-label" htmlFor={field.id}>
            {field.label || field.id}{field.required?<span>*</span>:null}
          </label>
          <input
            {...register(field.id)}
            className="input-field"
            id={field.id}
            type={field.type}
            placeholder={field.placeholder && field.placeholder}
          />
          {errors[field.id] ? (
            <p className="error">{errors[field.id]?.message}</p>
          ) : null}
        </div>
      );
  }
}
