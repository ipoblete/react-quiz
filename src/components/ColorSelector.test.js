import React from 'react';
import renderer from 'react-test-renderer';
import ColorSelector from './ColorSelector';

describe('ColorSelector', () => {
  it('matches a snapshot', () => {
    const color = renderer.create(
      <ColorSelector />
    ).toJSON();
    expect(color).toMatchSnapshot();
  });
});
