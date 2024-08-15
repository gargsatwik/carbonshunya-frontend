import lifeCashImage from "../assets/ic_life_cash_small.png";

const CashTransactionComponent = ({ transactionDetails, amount, key }) => {
  return (
    <div
      className="flex flex-row justify-between mb-10"
      style={{ marginRight: "4%", marginLeft: "5%" }}
      key={key}
    >
      <img
        src={lifeCashImage}
        height={"24px"}
        width={"24px"}
        style={{ width: "5%" }}
      ></img>
      <div>{transactionDetails}</div>
      <div>₹ {amount}</div>
    </div>
  );
};

export default CashTransactionComponent;
