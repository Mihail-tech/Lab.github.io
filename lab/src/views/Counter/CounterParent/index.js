import React from "react";
import Button from "@material-ui/core/Button";



const CounterParent = ({
  list,
  handleCreateCounter,
  handleRemoveCounter,
  handleResetCounters,
}) => {
  

  return (
    <div>
        <div>
        <Button variant="contained" color="primary" onClick = {handleCreateCounter}>
        add counter
        </Button>
        <Button variant="contained" color="secondary"  onClick = {handleRemoveCounter}>
            delete counter
        </Button>                 
        <Button onClick = {handleResetCounters}>
            Reset
        </Button>
        </div>
        <div>
        <ul>
            <li>
                {list}
            </li>
        </ul>
        </div>
    </div>
  );
};


export default CounterParent;
  

