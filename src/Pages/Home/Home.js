import { DependencyBox } from "../../Components";
import { useNavigate } from "react-router-dom";

import "./style.css";

const Home = () => {
  const navigate = useNavigate();
  const redirectToResult = () => {
    navigate("/resultado");
  };
  return (
    <div className="container-Home">
      <DependencyBox onClick={redirectToResult} />
    </div>
  );
};

export default Home;
