import React from "react";
import classes from "./Procedures.module.css";

const Procedures = () => {
  return (
    <div className={classes.procedure}>
      <h2>How Does it work ? </h2>
      <ul>
        <li>
            
          <h4>Invite Your Friends</h4>
          <p>Share the link tutedude.com with your friends</p>
        </li>
        <li>
          <h4>Friend purchase any course</h4>
          <p>Using your REFERRAL CODE in the payments page</p>
        </li>
        <li>
          <h4>You get Rs 200 as referral money</h4>
          <p>On total purchase the friend makes, into your waller</p>
        </li>
        <li>
          <h4>Your Friends gets Rs 200 Off</h4>
          <p>
            On his overall fee on successful purchase using your referral code
          </p>
        </li>
        <li>
          <h4>Transfer money from wallet</h4>
          <p>
            When the wallet balance reaches Rs200 or more, you can withdraw it
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Procedures;
