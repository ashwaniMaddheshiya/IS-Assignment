import React from 'react'
import classes from './CandidateCard.module.css';

const CandidateCard = (props) => {
  return (
    <div className={classes.candidate}>
        <div className={classes.nameplate}>
            <span>{props.name}</span>
            <span>{props.date}</span>
        </div>
        <div className={classes.courses}>
            <span>Course Enrolled</span>
            <ul>
                <li>{props.course1}</li>
                <li>{props.course2}</li>
                <li>{props.course3}</li>
                <li>{props.course4}</li>
                <li>{props.course5}</li>
            </ul>
        </div>
        <div className={classes.referal}>
            <span>Referal Amount <strong style={{fontSize: '20px'}}>₹ {props.referalAmount}</strong></span>
        </div>
    </div>
  )
}

export default CandidateCard