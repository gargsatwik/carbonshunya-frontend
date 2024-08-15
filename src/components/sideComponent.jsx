const SideComponent = ({ imgSrc, title, subtitle, buttonText, onClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center p-4 h-full bg-white border border-gray-300 rounded-lg"
      style={{ width: "100%", borderRadius: "8px", height: "100%" }}
    >
      <img
        src={imgSrc}
        alt="Image"
        className="rounded-lg mb-4"
        style={{ width: "80%", height: subtitle ? "65%" : "90%" }}
      />
      <div className="flex flex-col text-center items-center justify-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && (
          <h3 className="text-gray-500" style={{ width: "80%" }}>
            {subtitle}
          </h3>
        )}
        <button
          onClick={onClick}
          className="mt-4 bg-gray-600 text-white rounded-md px-4 py-1"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SideComponent;
