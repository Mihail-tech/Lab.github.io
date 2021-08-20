import React from 'react';
import Button from '@material-ui/core/Button';
import CounterContainer from '../../../containers/CounterContainer';

const CounterParent = ({count,
    handleResetCounters,
    handleCreateCounter ,
    handleRemoveCounter ,
    ...props
     
 }) => {
//нужно куда-то пихнуть значения для вывода
    const list = []
    for (let i = 0; i < count.length; i++) {
        list.push(
            <ul>
                <li ><CounterContainer count = {count} {...props}/></li>
            </ul>
        )
        
    }
    debugger
    console.log(list);
    return(
        <div>
                <Button variant="contained" color="primary" onClick={handleCreateCounter()}>
                    add counter
                </Button> 
                <Button variant="contained" color="secondary" onClick={handleResetCounters()}>
                    delete counter
                </Button>
                <Button  onClick={handleRemoveCounter()}>
                    reset counter
                </Button>
                <div>
                    <ul>
                        {list}
                    </ul>
                </div>
        </div>
    )
}

export default CounterParent;

