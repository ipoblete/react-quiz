import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ color, background }) {
  return (
    <>
      <input type="color" name="color" value={color}/>
      <input type="color" name="background" value={background}/>
    </>
  );
}

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired
};

export default ColorSelector;
