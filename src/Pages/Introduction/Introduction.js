import { BoxWithButton } from "../../Components";
import { useNavigate } from "react-router-dom";

import spider from "../../Assets/spider-man.png";
import "./style.css";

const Introduction = () => {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/home");
  };
  return (
    <div className="container-Introduction">
      <BoxWithButton
        onClick={redirectToHome}
        imagePath={spider}
        buttonText="Seguir"
        titleText="Essa aplicação é uma avaliação técnica, onde o objetivo é imprimir a
        ordem de dependências que precisam ser instaladas de um projeto. Aperte
        o botão abaixo para começar."
      />
    </div>
  );
};

export default Introduction;
