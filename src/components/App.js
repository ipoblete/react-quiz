import React, { Component } from 'react';
import Shape from './Shape';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';

export default class App extends Component {
  state = {
    text: '',
    fontColor: '',
    backgroundColor: '#FF0000'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { fontColor, backgroundColor, text } = this.state;

    return (
      <>
        <h1>REACT!</h1>
        <TextSelector 
          text={text}
          onChange={this.handleChange}
        />
        <ColorSelector 
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          onChange={this.handleChange}
        />
        <Shape 
          text={text}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
        />
      </>  
    );
  }
}


