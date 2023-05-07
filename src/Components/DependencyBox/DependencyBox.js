import "./style.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import { useState } from "react";

const DependencyBox = ({ onClick }) => {
  const [inputArray, setInputArray] = useState([{ type: "text", value: "" }]);

  const addInput = () => {
    setInputArray((value) => {
      return [...value, { type: "text", value: "" }];
    });
  };

  const removeInput = () => {
    setInputArray((previousArray) => previousArray.slice(0, -1));
  };

  return (
    <div className="container-DependencyBox">
      <h1 className="container-DependencyBox-title">
        Adicione a(s) dependência(s) do projeto:
      </h1>
      <input type="text" />
      <DoNotDisturbOnIcon sx={{ color: "#780400" }} onClick={() => {}} />
      <AddCircleIcon sx={{ color: "#1B2B8E" }} onClick={() => {}} />
      <h1 className="container-DependencyBox-title">
        Adicione a(s) dependência(s) da(s) dependência(s) do projeto:
      </h1>
      <div className="container-DependencyBox-input-box">
        <p className="container-DependencyBox-text">Dep</p>
        <input type="text" />
        <p className="container-DependencyBox-text">:</p>
        {inputArray.map((item, i) => {
          return (
            <div key={i}>
              <input type={item.type} size="40" />
            </div>
          );
        })}
        <DoNotDisturbOnIcon sx={{ color: "#780400" }} onClick={removeInput} />
        <AddCircleIcon sx={{ color: "#1B2B8E" }} onClick={addInput} />
        <DeleteIcon sx={{ color: "#780400" }} />
      </div>
      <button>+</button>
      <button className="container-DependencyBox-button" onClick={onClick}>
        Enviar
      </button>
    </div>
  );
};

export default DependencyBox;
