const MidComponent = ({ imgSrc, text, componentText, buttonText }) => {
  return (
    <div
      className="flex bg-white"
      style={{ width: "100%", paddingRight: "4%" }}
    >
      <img src={imgSrc}></img>
      <div
        className="text-gray-600 text-4xl"
        style={{ marginTop: "5%", marginRight: "5%", marginLeft: "5%" }}
      >
        {text}
      </div>
      <div>
        <div className="text-gray-600 text-xl">{componentText}</div>
        <button className="mt-4 bg-gray-600 text-white rounded-md px-4 py-1">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MidComponent;
