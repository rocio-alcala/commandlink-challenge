import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Field } from "../types";
import "./Input.css";
import { capitalizeString } from "../helpers";
interface InputProps {
  field: Field;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<{
    [x: string]: string;
    [x: number]: string;
  }>;
}

export default function Input({ field, register, errors }: InputProps) {
  return (
    <div className="inputcontainer">
      <label className="input-label" htmlFor={field.id}>
        {capitalizeString(field.id)}
      </label>
      {field.type !== "select" ? (
        <input
          {...register(`${field.id}`)}
          className="input-field"
          id={field.id}
          type={field.type}
          placeholder={field.placeholder && field.placeholder}
        ></input>
      ) : (
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
      )}
      {errors[field.id] ? <p>{errors[field.id]?.message}</p> : null}
    </div>
  );
}
