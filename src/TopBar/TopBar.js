import React from 'react'
import classes from './TopBar.module.css'

const TopBar = () => {
  return (
    <header>
      <nav className={classes.TopBar}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt='Amazon Logo'/>
      </nav>
    </header>
  )
}

export default TopBar
