import React from 'react';
import Counter from '../views/Counter';
import  PropTypes  from 'prop-types';


class CheckCounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentValue: 0,
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.changeDisplayFormStatus = this.changeDisplayFormStatus.bind(this);
    }

      handleIncrement() {
        this.setState({
          currentValue: this.state.currentValue + 1,
        });
      }
    
      handleDecrement() {
        this.setState({
          currentValue: this.state.currentValue - 1,
        });
      }
    
      changeDisplayFormStatus() {
        this.setState({
            currentValue: 0
        });
      }
    
      render() {
        return (
          <Counter
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            changeDisplayFormStatus={this.changeDisplayFormStatus}
            currentValue={this.state.currentValue}
            
          />
        );
      }
}
CheckCounterContainer.defaultProps = {currentValue: 0}

CheckCounterContainer.propTypes = {
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
    changeDisplayFormStatus: PropTypes.func,
    currentValue: PropTypes.number
}


export default CheckCounterContainer;