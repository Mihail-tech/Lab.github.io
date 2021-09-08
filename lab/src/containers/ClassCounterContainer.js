import React, { createRef } from "react";
import Counter from "../views/Counter";

class ClassCounterContainer extends React.Component {
  //initialization state inside constructor
  constructor({ count }) {
    super();
    this.state = { counts: 0 };
    this.prevCount = createRef(count);
  }
  //mount
  componentDidMount() {}
  //unmount
  componentWillUnmount() {}
  //update
  componentDidUpdate() {}
  //true or false and depending on this, decides whether a rerender is needed
  shouldComponentUpdate(nextState) {
    return this.state.counts === nextState.count;
  }
  //called before the mounted component receives the props
  UNSAFE_componentWillReceiveProps(nextProps) {
    (nextProps.count > this.prevCount.current) ? this.handleEvenValue() : this.handleOddValue()
    this.prevCount.current = nextProps.count;
  }
  //component rendering
  render() {
    return <Counter countValue={this.state.counts} />;
  }
}

export default ClassCounterContainer;
