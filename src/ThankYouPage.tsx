import { useAppSelector } from "./app/typehooks";
import fields from "../fields.json";
import "./ThankYouPage.css";


export default function ThankYouPage({ setIsModalOpen }) {
  const storeForm = useAppSelector((state) => state.form);

  return (
    <div className="displaydatacontainer">
      <h1 className="title">
        Thank you! You had submitted this information...
      </h1>
      <div className="datainputcontainer">
        {fields.map((field, index) => {
          if (Array.isArray(field)) {
            if (field.some((columField) => storeForm[columField.id]))
              return (
                <div key={index} className="datainputrowcontainer">
                  {field.map((columField, index) => {
                    if (storeForm[columField.id])
                      return (
                        <span className="datainput" key={index}>
                          {storeForm[columField.id]}
                        </span>
                      );
                  })}
                </div>
              );
          } else {
            if (storeForm[field.id])
              return (
                <span className="datainput" key={index}>
                  {storeForm[field.id]}
                </span>
              );
          }
        })}
      </div>
      <button onClick={() => setIsModalOpen(false)}>Close</button>
    </div>
  );
}
