import React from "react";
import Button from "@material-ui/core/Button";


const Counter = ({
    countValue,
    handleIncrement,
    handleDecrement,
    handleReset,
}) => {
  

  return (
    <div>
         <div>{"Current value: " + countValue}</div>
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