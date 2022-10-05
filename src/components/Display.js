import classes from '../css/Display.module.css'
import { useState } from 'react';
const Display = (props) => {
    return (
    <div className={classes.screen}>
      <span className={classes.result}>{props.result}</span>
      <span className={classes.input}>{props.input}</span>
    </div>
  );
};

export default Display;
