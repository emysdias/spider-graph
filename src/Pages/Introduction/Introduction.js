import { IntroductionBox } from "../../Components";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Introduction = () => {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/home");
  };
  return (
    <div className="container-Introduction">
      <IntroductionBox onClick={redirectToHome} />
    </div>
  );
};

export default Introduction;
