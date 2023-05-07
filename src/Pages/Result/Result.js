import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { BoxWithImage } from "../../Components";
import { Graph } from "../../Shared";

import spider from "../../Assets/spider-man-smile.png";
import "./style.css";

const Result = () => {
  const [resultText, setResultText] = useState("Sem resultado");
  const navigate = useNavigate();
  const location = useLocation();
  const dependenciesInput = location.state.dependenciesInput ?? "";
  const subDependencyListInput = location.state.subDependencyListInput ?? "";
  const subDependencyInput = location.state.subDependencyInput ?? "";

  const splitArray = (array) => {
    return array[0].split(", ");
  };

  const splitDependenciesInput = splitArray(dependenciesInput);

  useEffect(() => {
    const myDependencies = createDependenciesObject(splitDependenciesInput);
    let result = Graph(myDependencies);
    setResultText(result ?? "Ocorreu um erro!");
  }, []);

  const createDependenciesObject = (letters) => {
    const dependencies = {};

    letters.forEach((letter) => {
      dependencies[letter] = [];
    });

    subDependencyInput.forEach((letter, i) => {
      dependencies[letter] = splitArray(subDependencyListInput[i]);
    });
    return dependencies;
  };

  const redirectToHome = () => {
    navigate("/home");
  };
  return (
    <div className="container-Result">
      <BoxWithImage
        onClick={redirectToHome}
        imagePath={spider}
        buttonText={"Tentar novamente"}
        titleText={`Solução possível do projeto é: ${resultText}`}
      />
    </div>
  );
};

export default Result;
