import React from 'react'
import classes from './OpenedPage.module.css';

//The text appears in span will be handled on the basis of routing effect.

const OpenedPage = ( props) => {
  return (
    <div className={classes.box}>
        <span style={{color:'black'}}>
            UI/UX {'>'} Refer & Earn {'>'} {props.nextPage}
        </span>
    </div>
  )
}

export default OpenedPage