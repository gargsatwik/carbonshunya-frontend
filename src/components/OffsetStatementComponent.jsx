const data = [
  {
    ruralSupport: "You supported 9 ruralfolk with 1 month's clean energy",
    offsets: 3,
    amount: 3459,
    projectFunded: "HFC Energy",
  },
  {
    ruralSupport: "You supported 15 ruralfolk with 1 month's clean energy",
    offsets: 5,
    amount: 4253,
    projectFunded: "ABC Biogas",
  },
  {
    ruralSupport: "You supported 6 ruralfolk with 1 month's clean energy",
    offsets: 2,
    amount: 7324,
    projectFunded: "DEF Solar",
  },
  {
    ruralSupport: "You supported 9 ruralfolk with 1 month's clean energy",
    offsets: 3,
    amount: 3453,
    projectFunded: "XYZ Biogas",
  },
  {
    ruralSupport: "You supported 12 ruralfolk with 1 month's clean energy",
    offsets: 4,
    amount: 4264,
    projectFunded: "PQR Energy",
  },
];

const OffsetRow = ({ ruralfolkSupported, offsets, amount, project }) => {
  return (
    <div className="grid grid-cols-4 items-center py-3 border-b border-gray-300">
      <div className="text-gray-600 text-lg">{ruralfolkSupported}</div>
      <div className="text-gray-600 text-lg text-center">{offsets}</div>
      <div
        className="text-gray-600 text-lg text-center"
        style={{ width: "15%" }}
      >
        {amount}
      </div>
      <div className="text-gray-600 text-lg text-center">
        <a>{project}</a>
      </div>
    </div>
  );
};

const OffsetStatement = () => {
  return (
    <div className="ml-8 mr-8">
      <div className="flex justify-between items-center mb-5">
        <div className="text-4xl text-gray-600">Offset Statement</div>
        <div>
          <button className="mt-4 w-[150px] bg-gray-600 text-white rounded-md px-2">
            Download
          </button>
        </div>
      </div>
      <hr className="mb-6" />
      <div className="grid grid-cols-4 font-semibold text-gray-600 mb-4">
        <div>Ruralfolk supported (no.)</div>
        <div className="text-center">No. of offsets bought</div>
        <div className="text-center">Total amount (₹)</div>
        <div className="text-center">Rural project funded</div>
      </div>
      <div>
        {data.map((entry, index) => (
          <OffsetRow
            key={index}
            ruralfolkSupported={entry.ruralSupport}
            offsets={entry.offsets}
            amount={entry.amount}
            project={entry.projectFunded}
          />
        ))}
      </div>
    </div>
  );
};

export default OffsetStatement;
