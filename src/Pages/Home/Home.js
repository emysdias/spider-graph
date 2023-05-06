import "./style.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const redirectToResult = () => {
    navigate("/resultado");
  };
  return (
    <div className="container-home">
      <button
        className="container-home-button"
        onClick={redirectToResult}
        width={"1000px"}
      >
        Testando rotas do deploy
      </button>
    </div>
  );
};

export default Home;
