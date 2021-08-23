import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";


const Counter = ({
    countValue,
    handleIncrement,
    handleDecrement,
    handleReset,
}) => {
  
  const classes = useStyles();

  return (
    <div>
         <div className = {classes.decorationCurrentValue}>{"Current value: " + countValue}</div>
                <Button variant="contained" color="primary" onClick = {handleIncrement}>
                increment
                </Button>
                <Button variant="contained" color="secondary" onClick = {handleDecrement}>
                decrement
                </Button>
            <Button onClick = {handleReset}>
                Reset
            </Button>
    </div>
  );
};


export default Counter;