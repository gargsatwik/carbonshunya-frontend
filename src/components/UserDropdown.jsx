import dropDownImage from "../assets/arrow_dropdown.png";

const UserDropdown = () => {
  return (
    <div>
      <div className="text-lg text-gray-500 ">Hello Arvind</div>
      <div>
        <button className="border-none bg-white">
          <img src={dropDownImage} alt="dropdown"></img>
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
