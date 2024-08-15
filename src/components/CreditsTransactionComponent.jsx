import creditsImage from "../assets/ic_life_credits_small.png";

const CreditsTransactionComponent = ({ transactionDetails, amount }) => {
  return (
    <div>
      <img src={creditsImage} height={"24px"} width={"24px"}></img>
      <div>{transactionDetails}</div>
      <div>{amount}</div>
    </div>
  );
};

export default CreditsTransactionComponent;
