import React from "react";
import classes from "./BalanceCard.module.css";

const BalanceCard = (props) => {
  return (
    <div className={classes.balanceCard}>
      <div className={classes.balanceDetails}>
        <span>
          Referal Earning
          <h3>₹ 2500</h3>
        </span>
        <span>
          Total Referals
          <h3>7</h3>
        </span>
        <span>
          Wallet Balance
          <h3>₹ 500</h3>
        </span>
      </div>
      <button className={classes.btn}>Withdraw Balance</button>
    </div>
  );
};

export default BalanceCard;
