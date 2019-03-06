import React, { Component } from 'react';
import ColorSelector from './ColorSelector';

export default class App extends Component {
  state = {
    text: '',
    color: '',
    background: ''
  };

  render() {
    return (
      <>
        <h1>REACT!</h1>
        <ColorSelector />
      </>  
    );
  }
}


