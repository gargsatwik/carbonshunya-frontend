const Life = ({ title, imgSrc, content }) => {
  return (
    <div className="flex flex-row mr-10">
      <img src={imgSrc} alt={title} className="h-32 w-32 mr-8 ml-8" />
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
