const Life = ({ title, imgSrc, content }) => {
  return (
    <div className="flex flex-row pr-10 bg-white border border-gray-300 rounded-lg">
      <img src={imgSrc} alt={title} className="h-28 w-28 mr-8 ml-8" />
      <div className="flex flex-col items-center justify-center">
        <div className="text-xl text-gray-600">{title}</div>
        {title === "LIFE Cash" ? (
          <div className="text-4xl text-gray-600 font-bold">₹ {content}</div>
        ) : (
          <div className="text-4xl text-gray-600 font-bold">{content}</div>
        )}
      </div>
    </div>
  );
};

export default Life;
