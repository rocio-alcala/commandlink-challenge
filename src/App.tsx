import "./App.css";
import Input from "./Input";
import fields from "../fields.json";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
  } = useForm();


  return (
    <div className="container">
      <h1>Command Link Form</h1>
      <form className="container" onSubmit={handleSubmit((formValues)=> console.log(formValues))}>
        {fields.map((field, index) => {
          if (Array.isArray(field)) {
            return (
              <div className="rowcontainer">
                {field.map((columField, index) => {
                  return <Input register={register} field={columField} key={index}></Input>;
                })}
              </div>
            );
          } else {
            return <Input register={register} field={field} key={index}></Input>;
          }
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
