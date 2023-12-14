import "./App.css";
import Input from "./Input";
import fields from "../fields.json"

function App() {
  return (
    <div className="container">
    <h1>Comand Link Form</h1>
    <form className="container">
      {fields.map((field, index) => {
        if (Array.isArray(field)) {
          return (
            <div className="rowcontainer">
              {field.map((columField, index) => {
                return <Input field={columField} key={index}></Input>;
              })}
            </div>
          );
        } else {
          return <Input field={field} key={index}></Input>;
        }
      })}
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
