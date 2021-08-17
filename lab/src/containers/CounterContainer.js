import React, { useState } from 'react';
import Counter from '../views/Counter';
import  PropTypes  from 'prop-types';


const CounterContainer = () => {

  let [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount( count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const changeDisplayFormStatus = () => {
    setCount(0)
  }

  return (
    <Counter handleIncrement = {handleIncrement}
      handleDecrement = {handleDecrement}
      changeDisplayFormStatus = {changeDisplayFormStatus}
      count = {count}
    />
  )
}

CounterContainer.propTypes = {
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
    changeDisplayFormStatus: PropTypes.func,
    count: PropTypes.number
}


export default CounterContainer;