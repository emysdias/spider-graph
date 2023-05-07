import "./style.css";

const BoxWithImage = ({ onClick, imagePath, buttonText, titleText }) => {
  return (
    <div className="container-BoxWithImage">
      <img
        alt="spider"
        className="container-BoxWithImage-image"
        src={imagePath}
      />
      <p className="container-BoxWithImage-title">{titleText}</p>
      <button className="container-BoxWithImage-button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default BoxWithImage;
