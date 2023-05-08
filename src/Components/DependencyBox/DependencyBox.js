import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";

import "./style.css";

const DependencyBox = ({
  onClick,
  handleInputChange,
  dependenciesInput,
  setDependenciesInput,
  subDependencyInput,
  setSubDependencyInput,
  subDependencyListInput,
  setSubDependencyListInput,
}) => {
  const [numberOfDependencyBoxes, setNumberOfDependencyBoxes] = useState(1);

  const addDependencyBox = () => {
    setNumberOfDependencyBoxes((prev) => prev + 1);
  };

  const removeDependencyBox = () => {
    setNumberOfDependencyBoxes((prev) => prev - 1);
    //Para limpar os inputs

    if (subDependencyInput.length === numberOfDependencyBoxes) {
      setSubDependencyInput((previousArray) => previousArray.slice(0, -1));
      setSubDependencyListInput((previousArray) => previousArray.slice(0, -1));
    }
  };

  return (
    <div className="container-DependencyBox">
      <h1 className="container-DependencyBox-title">
        Adicione a(s) dependência(s) do projeto:
      </h1>
      <input
        type="text"
        className="container-DependencyBox-dependenciesInput"
        value={dependenciesInput}
        onInput={(e) => handleInputChange(e, setDependenciesInput, 0)}
      />
      <h1 className="container-DependencyBox-title">
        Adicione a(s) dependência(s) da(s) dependência(s) do projeto:
      </h1>
      <div className="container-DependencyBox-input-array">
        {Array.from(Array(numberOfDependencyBoxes)).map((_, i) => (
          <div key={i} className="container-DependencyBox-input-box">
            <p className="container-DependencyBox-input-box-text">Dep</p>
            <input
              id={i}
              className="container-DependencyBox-subDependencyInput"
              type="text"
              value={subDependencyInput[i] ?? ""}
              onInput={(e) => handleInputChange(e, setSubDependencyInput, i)}
            />
            <p className="container-DependencyBox-input-box-text">:</p>
            <input
              id={i}
              className="container-DependencyBox-dependenciesInput"
              type="text"
              value={subDependencyListInput[i] ?? ""}
              onInput={(e) =>
                handleInputChange(e, setSubDependencyListInput, i)
              }
            />
          </div>
        ))}
      </div>
      <div className="container-DependencyBox-button-box">
        <button
          className="container-DependencyBox-button-box-icon"
          onClick={removeDependencyBox}
        >
          <DoNotDisturbOnIcon sx={{ color: "#780400", fontSize: "30px" }} />
        </button>
        <button
          className="container-DependencyBox-button-box-icon"
          onClick={addDependencyBox}
        >
          <AddCircleIcon sx={{ color: "#1B2B8E", fontSize: "30px" }} />
        </button>
      </div>
      <button className="container-DependencyBox-sendButton" onClick={onClick}>
        Enviar
      </button>
    </div>
  );
};

export default DependencyBox;
