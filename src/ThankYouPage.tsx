import { useAppSelector } from "./app/typehooks";
import fields from "../fields.json";
import "./ThankYouPage.css";

export default function ThankYouPage() {
  const storeForm = useAppSelector((state) => state.form);

  return (
    <>
      <h1 className="container">
        {fields.map((field, index) => {
          if (Array.isArray(field)) {
            return (
              <div key={index} className="rowcontainer">
                {field.map((columField, index) => {
                  if (storeForm[columField.id])
                    return (
                      <div className="inputs" key={index}>
                        {storeForm[columField.id]}
                      </div>
                    );
                })}
              </div>
            );
          } else {
            if (storeForm[field.id])
              return <div  className="inputs" key={index}>{storeForm[field.id]}</div>;
          }
        })}
      </h1>
    </>
  );
}
