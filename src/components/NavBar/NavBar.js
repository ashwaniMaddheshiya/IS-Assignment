import React from 'react'
import classes from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={classes.header}>
        <div style={{marginLeft: "7%"}}>
            <span>TuteDude</span>
        </div>
        <div className={classes.header__right}>
            <span>My Assignment</span>
            <span>Chat with Mentor</span>
            <span>ProfileName</span>
        </div>
    </div>
  )
}

export default NavBar