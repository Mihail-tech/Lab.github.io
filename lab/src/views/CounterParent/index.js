import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./style";
import Navbar from "../Navbar";
import PropTypes from "prop-types";
import { generateList } from "../helper";

const CounterParent = ({
  count,
  handleCreateCounter,
  handleRemoveCounter,
  handleResetCounters,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.orintation}>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateCounter}
          >
            add counter
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleRemoveCounter}
          >
            delete counter
          </Button>
          <Button onClick={handleResetCounters}>Reset</Button>
        </div>
        <div>
          <ul>
            <li className={classes.decorationList}> {generateList(count)}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

CounterParent.propTypes = {
  list: PropTypes.array,
  handleCreateCounter: PropTypes.func,
  handleRemoveCounter: PropTypes.func,
  handleResetCounters: PropTypes.func,
};

export default CounterParent;
