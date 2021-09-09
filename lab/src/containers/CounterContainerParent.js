import React, { useState } from "react";
import PropTypes from "prop-types";
import CounterParent from "../views/CounterParent";

const CounterContainerParent = () => {
  const [count, setCount] = useState(1);

  const handleResetCounters = () => {
    setCount(1);
  };

  const handleCreateCounter = () => {
    setCount(count + 1);
  };

  const handleRemoveCounter = () => {
    if (count > 1) setCount(count - 1)
  };

  // const list = [];
  // for (let i = 0; i < count; i++) {
  //   list.push(<CounterContainer count={count} key={i} />);
  // }


  return (
    <CounterParent
      // list={list}
      count = {count}
      handleCreateCounter={handleCreateCounter}
      handleRemoveCounter={handleRemoveCounter}
      handleResetCounters={handleResetCounters}
    />
  );
};

CounterContainerParent.propTypes = {
  list: PropTypes.array,
  handleCreateCounter: PropTypes.func,
  handleRemoveCounter: PropTypes.func,
  handleResetCounters: PropTypes.func,
};

export default CounterContainerParent;