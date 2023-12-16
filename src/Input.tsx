import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Field } from "../types";
import "./Input.css";

interface InputProps {
  field: Field;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<Record<string, string>>;
}

export default function Input({ field, register, errors }: InputProps) {
  return (
    <div className="inputcontainer">
      <label className="input-label" htmlFor={field.id}>
        {field.label || field.id}
      </label>
      {field.type === "text" ||
      field.type === "phone" ||
      field.type === "email" ? (
        <input
          {...register(`${field.id}`)}
          className="input-field"
          id={field.id}
          type={field.type}
          placeholder={field.placeholder && field.placeholder}
        ></input>
      ) : field.type === "select" ? (
        <select
          {...register(`${field.id}`)}
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
      ) : field.type === "textarea" ? (
        <textarea
          {...register(`${field.id}`)}
          className="input-field"
          id={field.id}
          placeholder={field.placeholder && field.placeholder}
        ></textarea>
      ) : null}
      {errors[field.id] ? (
        <p className="error">{errors[field.id]?.message}</p>
      ) : null}
    </div>
  );
}
