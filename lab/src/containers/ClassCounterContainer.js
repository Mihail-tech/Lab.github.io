import React, { createRef } from "react";
import Counter from "../views/Counter";



class ClassCounterContainer extends React.Component {
  constructor({count }) {
    super();
    this.state = {counts: 0 };
    this.prevCount = createRef(count);
  }
//монтаж
  componentDidMount() {
  }
//демонтаж
  componentWillUnmount() {
  }
//обновление
  componentDidUpdate() {
  }
//true or false и в зависимости от этого решает нужен ли ререндер
  shouldComponentUpdate( nextState) {
    if(this.state.counts === nextState.count) {
        return false
    } else {
        return true
    }
  }
//вызывается до того как монтированный компонент получает пропс
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.count > this.prevCount.current) {
      this.handleEvenValue();
    }
    if (nextProps.count < this.prevCount.current) {
      this.handleOddValue();
    }
    this.prevCount.current = nextProps.count;
  }

  
  render() {
    return (
      <Counter
        countValue={this.state.counts}
      />
    );
  }
}

export default ClassCounterContainer;