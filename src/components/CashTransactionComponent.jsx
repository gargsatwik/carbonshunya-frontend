import lifeCashImage from "../assets/ic_life_cash_small.png";

const CashTransactionComponent = ({ transactionDetails, amount, key }) => {
  return (
    <div className="flex flex-row justify-between" key={key}>
      <img src={lifeCashImage} height={"24px"} width={"24px"}></img>
      <div>{transactionDetails}</div>
      <div>{amount}</div>
    </div>
  );
};

export default CashTransactionComponent;
