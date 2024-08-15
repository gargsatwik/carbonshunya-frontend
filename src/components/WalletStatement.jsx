import { useEffect, useState } from "react";
import CashTransactionComponent from "./CashTransactionComponent";

const data = [
  {
    id: 1,
    transactionDetails: "Vistara",
    walletType: "Cash",
    amount: 364,
  },
  {
    id: 2,
    walletType: "Credits",
    transactionDetails: "Tata Power",
    amount: 364,
  },
  {
    id: 3,
    walletType: "Cash",
    transactionDetails: "Zomato",
    amount: 257,
  },
  {
    id: 4,
    walletType: "Cash",
    transactionDetails: "Uber",
    amount: 143,
  },
];

const WalletStatement = () => {
  // const [walletData, setWalletData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
  }, []);

  // useEffect(() => {
  //   const fetchWalletData = async () => {
  //     try {
  //       const cashResponse = await axios.get(
  //         `${import.meta.env.VITE_BACKEND_URL}/wallet/history`,
  //         {
  //           headers: {
  //             authToken: localStorage.getItem("authToken"),
  //           },
  //           params: {
  //             walletType: "CASH",
  //           },
  //         }
  //       );
  //       const creditsResponse = await axios.get(
  //         `${import.meta.env.VITE_BACKEND_URL}/wallet/history`,
  //         {
  //           headers: {
  //             authToken: localStorage.getItem("authToken"),
  //           },
  //           params: {
  //             walletType: "CREDITS",
  //           },
  //         }
  //       );

  //       setWalletData([...cashResponse.data, ...creditsResponse.data]);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchWalletData();
  // }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      className="bg-white"
      style={{ width: "100%", marginRight: "10%", marginLeft: "2%" }}
    >
      <div className="flex flex-row justify-between items-center text-center p-4">
        <div className="text-2xl text-gray-600">My Wallet Statement</div>
        <div className="flex flex-row justify-between" style={{ width: "40%" }}>
          <button className="mt-4 w-[100px] bg-blue-500 text-white rounded-md px-4">
            Redeem
          </button>
          <button className="mt-4 w-[150px] bg-gray-600 text-white rounded-md px-2">
            Download
          </button>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between p-4">
        <div className="text-xl text-gray-600">LIFE Cash & Credits</div>
        <div className="text-xl text-gray-600">Transaction</div>
        <div className="text-xl text-gray-600">Amount</div>
      </div>
      <div>
        {data.map((item, index) => (
          <CashTransactionComponent
            transactionDetails={item.transactionDetails}
            amount={item.amount}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WalletStatement;
