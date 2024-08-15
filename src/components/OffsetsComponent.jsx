import offsetImage from "../assets/ic_offset_bought.png";

const OffsetsComponents = ({ imgSrc1, imgSrc2, value }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-2 bg-white border border-gray-300 rounded-lg pb-10">
      <div className="flex flew-row p-2">
        <img
          src={offsetImage}
          alt="Offset Image"
          className="m-2"
          style={{ height: "96px", width: "15%" }}
        ></img>
        <div style={{ width: "24%" }}>
          <div className="text-2xl text-gray-600">Offsets bought</div>
          <div className="text-4xl text-gray-600">
            <b>{value}</b>
          </div>
        </div>
        <img
          src={imgSrc1}
          alt="Village image"
          className="m-2 rounded-lg"
          style={{ width: "24%", height: "96px" }}
        />
        <img
          src={imgSrc2}
          alt="Village image"
          className="m-2 rounded-lg"
          style={{ width: "24%", height: "96px" }}
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
