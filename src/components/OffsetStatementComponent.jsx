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
    <div className="grid grid-cols-4 gap-4 py-3 border-b border-gray-300 items-center">
      <div className="text-gray-600 text-md">{ruralfolkSupported}</div>
      <div className="text-gray-600 text-sm text-center">{offsets}</div>
      <div className="text-gray-600 text-sm text-center">{amount}</div>
      <div className="text-gray-600 text-sm text-center">
        <a href="#" className="text-blue-500 hover:underline">
          {project}
        </a>
      </div>
    </div>
  );
};

const OffsetStatement = () => {
  return (
    <div className="mx-8 my-4">
      <div className="flex justify-between items-center mb-6">
        <div className="text-4xl text-gray-600">Offset Statement</div>
        <button className="bg-gray-600 text-white rounded-md px-4 py-2">
          Download
        </button>
      </div>
      <hr className="mb-6" />
      <div className="grid grid-cols-4 font-semibold text-gray-600 mb-4">
        <div className="text-left">Ruralfolk Supported (no.)</div>
        <div className="text-center">No. of Offsets Bought</div>
        <div className="text-center">Total Amount (₹)</div>
        <div className="text-center">Rural Project Funded</div>
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
