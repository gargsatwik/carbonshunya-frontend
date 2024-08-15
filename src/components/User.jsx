import fiveStarsImage from "../assets/ace_level_5.png";

const User = ({ imgSrc, name, level }) => {
  return (
    <div
      className="flex flex-col m-4 rounded-lg bg-white"
      style={{ width: "100%", height: "400px" }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src={imgSrc}
          alt="Profile Picture"
          className="rounded-full border border-blue-500"
          style={{ borderWidth: "2px" }}
          height={"128px"}
          width={"128px"}
        ></img>
        <div className="font-bold text-gray-600 text-xl">{name}</div>
      </div>
      <hr />
      <div className="flex mt-5 space-x-5" style={{ width: "80%" }}>
        {level == 5 ? (
          <div className="flex flex-col items-center" style={{ width: "100%" }}>
            <img src={fiveStarsImage} width="50%" alt="Five Stars" />
            <div className="w-full text-lg text-center mt-2">
              <b>Green Nirvana</b>
            </div>
          </div>
        ) : (
          <h2>UserImage</h2>
        )}
        {/* Replace with avatar */}
        <div style={{ width: "8%" }}>
          <div className="text-lg text-center" style={{ width: "100%" }}>
            Ace level
          </div>
          <div className="font-bold text-gray-600 text-6xl text-center">
            {level}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
