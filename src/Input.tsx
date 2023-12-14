import { Field } from "../types";

interface InputProps {
  field: Field;
}

export default function Input({ field }: InputProps) {
  return (
    <div className="inputcontainer">
      <label htmlFor={field.id}>{field.id} </label>
      {field.type !== "select" ? (
        <input
          id={field.id}
          type={field.type}
          required={field.required ? true : false}
          placeholder={field.placeholder && field.placeholder}
        ></input>
      ) : (
        <select id={field.id} defaultValue={field.placeholder}>
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
