import React, { useState } from 'react';
import  PropTypes  from 'prop-types';
import CounterParent from '../views/Counter/CounterParent';


const CounterContainerParent = () => {
    
    const[count, setCount] = useState(1);

    const [countValue, setCountValue] = useState(0)

//прибавляем
    const handleIncrement = () => {
        setCountValue(countValue + 1)
    }
//вычитаем    
    const handleDecrement = () => {
        setCountValue(countValue - 1)
    }
//состояние по умолчанию    
    const handleResetCounters = () => {
        setCount(1);
    }
//все удаляем
    const handleReset = () => {
        setCountValue(0)
     }
//добовляем полученный результат для вывода
    const handleCreateCounter = () => {
        setCount(count + 1)
    }
//удаляем без последнего
    const handleRemoveCounter = () => {
        if(count > 1){
           setCount( count - 1)
        }
    }
//если не четное отнимаем
    const handleOddNumber = () => {
        if(countValue % 2 === 1) {
            setCountValue(countValue - 1)
        }
    }
//если четное добовляем
    const handleEvenNumber = () => {
        if(countValue % 2 === 0) {
            setCountValue(countValue + 1)
        }
    }
    return(
        <CounterParent 
            count = {count}
            countValue = {countValue}
            handleIncrement = {handleIncrement}
            handleDecrement = {handleDecrement}
            handleResetCounters = {handleResetCounters}
            handleCreateCounter = {handleCreateCounter}
            handleRemoveCounter = {handleRemoveCounter}
            handleReset = {handleReset}
            handleEvenNumber = {handleEvenNumber}
            handleOddNumber = {handleOddNumber}

        />
    )
}

CounterContainerParent.propTypes = {
    handleResetCounters: PropTypes.func,
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
    handleCreateCounter: PropTypes.func,
    handleRemoveCounter: PropTypes.func,
    handleReset: PropTypes.func,
    count: PropTypes.number,
    handleEvenNumber: PropTypes.func,
    handleOddNumber: PropTypes.func
}


export default CounterContainerParent;




