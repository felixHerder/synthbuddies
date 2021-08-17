import React, { Component } from 'react';

class CounterBtn extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count !== this.state.count)
      return true;
    else return false;
  }
  updateCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }
  render() {
    console.log('Counterbtn rendered');
    return <button color={this.props.color} onClick={this.updateCount}>
      Count: {this.state.count}
    </button>
  }
}

export default CounterBtn;