import React, { useState, useRef, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import Counter from "../views/Counter";


const CounterContainer = ({ count }) => {
  const [number, setNumber] = useState(0);

  const prevCount = useRef(count);

  useEffect(() => {
    count > prevCount.current ? handleEvenNumber() : handleOddNumber();
  }, [count]);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  const handleReset = () => {
    setNumber(0);
  };

  const handleEvenNumber = () => {
    if (number % 2 === 0) handleIncrement();
  };

  const handleOddNumber = () => {
    if (number % 2 !== 0) handleDecrement();
  };

  const memorize = useMemo(
    () => (
      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
        number={number}
      />
    ),
    [number]
  );

  return memorize;
};

CounterContainer.propTypes = {
  count: PropTypes.number,
  number: PropTypes.number,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleReset: PropTypes.func,
};

export default CounterContainer;
