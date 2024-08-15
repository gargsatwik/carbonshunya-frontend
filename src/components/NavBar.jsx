import logoImage from "../assets/logo_people_planet.png";
import sideBarImage from "../assets/ic_hamburger.png";
import carbonShunyaLogo from "../assets/co_logo.png";
import UserDropdown from "./UserDropdown";

const NavBar = () => {
  return (
    <div className="flex justify-between mb-4 mt-2">
      <span className="flex items-center">
        <img src={sideBarImage} alt="Hamburger" className="h-10 w-8 mx-4" />
        <img
          src={carbonShunyaLogo}
          alt="CarbonShunya"
          className="h-16 w-auto mx-4"
        />
      </span>
      <div className="flex items-center space-x-4">
        <img
          src={logoImage}
          alt="People4planet logo"
          className="h-16 w-auto mx-4"
        />
        <UserDropdown />
      </div>
    </div>
  );
};

export default NavBar;
