
import React from "react";

import Counter from "../views/Counter/index";

class CounterContainer extends React.Component {
  
  constructor(props){
    super(props);
    this.prevCount = React.createRef(this.props.count)
  }
  

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      count,
      handleEvenNumber,
      handleOddNumber
    } = this.props

    if(count > nextProps.this.prevCount.current) {
      handleEvenNumber()
    } 
    if(count < nextProps.this.prevCount.current) {
      handleOddNumber()
    }

  }

  shouldComponentUpdate(nextProps) {
    const { countValue} = this.props
    if (countValue === nextProps.countValue) {
      return false;
    } else {
    return true;
    };
  }

  render() {
   
    
    return (
      
      <Counter countValue = {this.props.countValue}
      handleIncrement = {this.props.handleIncrement}
      handleDecrement = {this.props.handleDecrement}
      handleReset = {this.props.handleReset}
      />
    );
  }
}


export default CounterContainer;



