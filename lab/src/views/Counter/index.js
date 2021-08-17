import React from 'react';
import Button from '@material-ui/core/Button';



const Counter = (props) => {
    return (
                <div>
                    <div>{"Current value " + props.count}</div>
                    <Button variant="contained" color="primary" onClick={props.handleIncrement} >
                    increment
                    </Button> 
                    <Button variant="contained" color="secondary" onClick={props.handleDecrement}>
                    decrement
                    </Button>
                    <Button  onClick={props.changeDisplayFormStatus}>
                    reset
                    </Button>
                    
                </div>
            )
}


export default Counter;
