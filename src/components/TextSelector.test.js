import React from 'react';
import renderer from 'react-test-renderer';
import TextSelector from './TextSelector';

describe('TextSelector', () => {
  it('matches a snapshot', () => {
    const text = renderer.create(
      <TextSelector />
    ).toJSON();
    expect(text).toMatchSnapshot();
  });
});
