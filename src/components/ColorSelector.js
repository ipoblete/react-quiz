import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ fontColor, backgroundColor, onChange }) {
  return (
    <>
      <label>Font Color:</label>
      <input type="color" name="fontColor" value={fontColor} onChange={onChange}/>
      <label>Background Color:</label>
      <input type="color" name="backgroundColor" value={backgroundColor} onChange={onChange}/>
    </>
  );
}

ColorSelector.propTypes = {
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorSelector;
