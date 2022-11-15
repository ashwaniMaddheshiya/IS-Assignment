import React from 'react'
import classes from './ReferalCard.module.css';

const ReferalCard = (props) => {
  return (
    <div className={classes.referal__card}>
        <h3>Your Referral Code</h3>
        <div className={classes.referal__code}>
            <span>E</span>
            <span>D</span>
            <span>C</span>
            <span>H</span>
            <span>5</span>
            <span>4</span>
        </div>
    </div>
  )
}

export default ReferalCard