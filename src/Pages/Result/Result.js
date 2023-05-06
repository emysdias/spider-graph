import { BoxWithButton } from "../../Components";
import { useNavigate } from "react-router-dom";

import spider from "../../Assets/spider-man-smile.png";
import "./style.css";

const Result = () => {
  const navigate = useNavigate();
  const value = "Sem resultado";

  const redirectToHome = () => {
    navigate("/home");
  };
  return (
    <div className="container-Result">
      <BoxWithButton
        onClick={redirectToHome}
        imagePath={spider}
        buttonText={"Tentar novamente"}
        titleText={`Solução possível do projeto é: ${value}`}
      />
    </div>
  );
};

export default Result;
