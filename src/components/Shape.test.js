import React from 'react';
import renderer from 'react-test-renderer';
import Shape from './Shape';

describe('Shape', () => {
  it('matches a snapshot', () => {
    const shape = renderer.create(
      <Shape />
    ).toJSON();
    expect(shape).toMatchSnapshot();
  });
});
