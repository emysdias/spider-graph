import { DependencyBox } from "../../Components";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [dependenciesInput, setDependenciesInput] = useState("");
  const [subDependencyInput, setSubDependencyInput] = useState([""]);
  const [subDependencyListInput, setSubDependencyListInput] = useState([""]);
  const redirectToResult = () => {
    if (
      subDependencyInput.length > subDependencyListInput.length ||
      subDependencyListInput.includes("") ||
      subDependencyListInput.includes("") ||
      dependenciesInput.includes("")
    ) {
      window.alert("Preencha os inputs vazios!!");
    } else {
      navigate("/resultado", {
        state: {
          dependenciesInput: dependenciesInput,
          subDependencyInput: subDependencyInput,
          subDependencyListInput: subDependencyListInput,
        },
      });
    }
  };

  const handleInputChange = (event, setDependency, index) => {
    const newValue = event.target.value.toUpperCase();
    setDependency((prevDependencies) => {
      const newDependencies = [...prevDependencies];
      newDependencies[index] = newValue;
      return newDependencies;
    });
  };
  return (
    <div className="container-Home">
      <DependencyBox
        onClick={redirectToResult}
        handleInputChange={handleInputChange}
        dependenciesInput={dependenciesInput}
        setDependenciesInput={setDependenciesInput}
        subDependencyInput={subDependencyInput}
        setSubDependencyInput={setSubDependencyInput}
        subDependencyListInput={subDependencyListInput}
        setSubDependencyListInput={setSubDependencyListInput}
      />
    </div>
  );
};

export default Home;
