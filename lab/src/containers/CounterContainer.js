/* eslint-disable */
import React, { useState, useRef, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import Counter from "../views/Counter/index";

const CounterContainer = ({ count }) => {
  const [countValue, setCountValue] = useState(0)

  const prevCount = useRef(count)

  useEffect(() => {
    if (count > prevCount.current) {
      handleEvenNumber()
    }
    if (count < prevCount.current) {
      handleOddNumber()
    }
  }, [count])

  const handleIncrement = () => {
    setCountValue(countValue + 1);
  }

  const handleDecrement = () => {
    setCountValue(countValue - 1)
  }

  const handleReset = () => {
    setCountValue(0)
  }

  const handleEvenNumber = () => {
    if (countValue % 2 === 0) {
      handleIncrement()
    }
  }

  const handleOddNumber = () => {
    if (countValue % 2 !== 0) {
      handleDecrement()
    }
  }

  const memorize = useMemo(
    () => (
      <Counter
        handleIncrement = {handleIncrement}
        handleDecrement = {handleDecrement}
        handleReset = {handleReset}
        countValue = {countValue}
      />
    ),
    [countValue],
  )

  return memorize
};

CounterContainer.propTypes = {
  count: PropTypes.number,
  counterValue: PropTypes.number,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleReset: PropTypes.func
};

export default CounterContainer;



