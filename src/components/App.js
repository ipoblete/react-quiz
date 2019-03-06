import React, { Component } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';

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
        <TextSelector />
      </>  
    );
  }
}


