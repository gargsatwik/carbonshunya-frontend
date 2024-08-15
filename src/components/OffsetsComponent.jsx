import offsetImage from "../assets/ic_offset_bought.png";

const OffsetsComponents = ({ imgSrc1, imgSrc2, value }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <div className="flex flew-row p-4">
        <img
          src={offsetImage}
          alt="Offset Image"
          className="m-2"
          style={{ height: "100px" }}
        ></img>
        <div style={{ width: "30%" }}>
          <div className="m-2 text-3xl text-gray-600">Offsets bought</div>
          <div className="text-6xl text-gray-600">
            <b>{value}</b>
          </div>
        </div>
        <img
          src={imgSrc1}
          alt="Village image"
          className="m-2 rounded-lg"
          height={"24px"}
          width={"196px"}
        />
        <img
          src={imgSrc2}
          alt="Village image"
          className="m-2 rounded-lg"
          height={"24px"}
          width={"196px"}
        />
      </div>
      <div className="flex flex-row justify-between">
        <div
          className="flex justify-center items-center"
          style={{ width: "60%" }}
        >
          <button className="mt-2 bg-gray-600 text-white rounded-md px-4 py-1">
            Buy Offsets
          </button>
        </div>

        <div className="flex flex-col items-start">
          <div className="text-left">Small steps, big impact</div>
          <div className="text-left">Offset your CO2 emissions</div>
          <div className="text-left">
            Start today to shape a greener tomorrow
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffsetsComponents;
