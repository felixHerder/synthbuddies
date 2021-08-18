import React, { Component } from 'react';
import CounterBtn from './CounterBtn';

class Header extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }
  render() {
    console.log("Header rendered");
    return (
      <div>
        <h1 className='f2'>Synthfriends</h1>
        <CounterBtn color={"red"} />
      </div>
    );
  }
}

export default Header;