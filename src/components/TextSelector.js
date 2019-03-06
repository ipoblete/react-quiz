import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text }) {
  return (
    <>
      <label>Text:</label>
      <input type="text" name="text" value={text}/>
    </>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextSelector;

