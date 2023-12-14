import { FieldValues, UseFormRegister } from "react-hook-form";
import { Field } from "../types";
import "./Input.css";

interface InputProps {
  field: Field;
  register: UseFormRegister<FieldValues>;
}

export default function Input({ field, register }: InputProps) {
  return (
    <div className="inputcontainer">
      <label className="input-label" htmlFor={field.id}>
        {field.id}{" "}
      </label>
      {field.type !== "select" ? (
        <input
          {...register(`${field.id}`)}
          className="input-field"
          id={field.id}
          type={field.type}
          required={field.required ? true : false}
          placeholder={field.placeholder && field.placeholder}
        ></input>
      ) : (
        <select
          {...register(`${field.id}`)}
          className="input-field"
          id={field.id}
          defaultValue={field.placeholder}
        >
          <option value={field.placeholder} disabled>
            {field.placeholder}
          </option>
          {field.options?.map((selectOption, index) => (
            <option key={index} value={selectOption}>
              {selectOption}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
