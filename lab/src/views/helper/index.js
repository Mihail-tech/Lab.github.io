import React from "react";
import CounterContainer from "../../containers/CounterContainer";

export const generateList = (count) => {
    const list = [];
  for (let i = 0; i < count; i++) {
    list.push(<CounterContainer count={count} key={i} />);
  }
  return list
}