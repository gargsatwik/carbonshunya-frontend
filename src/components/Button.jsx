const Button = ({ text, width }) => {
  return (
    <button className={`text-white bg-gray-600 px-4 py-1 w-[${width}]`}>
      {text}
    </button>
  );
};
export default Button;
