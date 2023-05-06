import "./style.css";
import spider from "../../Assets/spider-man.png";

const IntroductionBox = ({ onClick }) => {
  return (
    <div className="container-IntroductionBox">
      <img
        alt="spider"
        className="container-IntroductionBox-image"
        src={spider}
      />
      <p className="container-IntroductionBox-text">
        Essa aplicação é uma avaliação técnica, onde o objetivo é imprimir a
        ordem de dependências que precisam ser instaladas de um projeto. Aperte
        o botão abaixo para começar.
      </p>
      <button className="container-IntroductionBox-button" onClick={onClick}>
        Seguir
      </button>
    </div>
  );
};

export default IntroductionBox;
