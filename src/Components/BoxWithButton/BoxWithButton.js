import "./style.css";

const BoxWithButton = ({ onClick, imagePath, buttonText, titleText }) => {
  return (
    <div className="container-BoxWithButton">
      <img
        alt="spider"
        className="container-BoxWithButton-image"
        src={imagePath}
      />
      <p className="container-BoxWithButton-text">{titleText}</p>
      <button className="container-BoxWithButton-button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default BoxWithButton;
