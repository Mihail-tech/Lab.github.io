import React from "react";
import Button from "@material-ui/core/Button";
import Navbar from "../../Navbar";
import useStyles from "./style";


const CounterParent = ({
  list,
  handleCreateCounter,
  handleRemoveCounter,
  handleResetCounters,
}) => {
  
  const classes = useStyles();

  return (
    <div>
        <Navbar />
        <div className = {classes.orintation}>
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
              <li className = {classes.decorationList}>
                  {list}
              </li>
          </ul>
          </div>
          </div>
    </div>
  );
};


export default CounterParent;
  

