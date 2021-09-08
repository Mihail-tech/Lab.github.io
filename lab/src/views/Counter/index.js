import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import PropTypes from "prop-types";

const Counter = ({ number, handleIncrement, handleDecrement, handleReset }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.decorationCurrentValue}>
        {"Current value: " + number}
      </div>
      <Button variant="contained" color="primary" onClick={handleIncrement}>
        increment
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDecrement}>
        decrement
      </Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleReset: PropTypes.func,
};

export default Counter;
