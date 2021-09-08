import React from "react";
import Navbar from "../Navbar";
import useStyles from "./style";

const MistakeOnClient = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.orintation}>
        <p>404 – страница не найдена</p>
      </div>
    </div>
  );
};

export default MistakeOnClient;
