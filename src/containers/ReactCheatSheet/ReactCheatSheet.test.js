import React from 'react';
import { mount } from 'enzyme';

import ReactCheatSheet from './ReactCheatSheet';

describe('<ReactCheatSheet/>', () => {
  fit('test..', () => {
    expect(1).toBe(1);
  });

  it('',()=>{
      
  })
});

function setup({ children = () => <div />, ...props } = {}) {
  let renderArg;
  const childSpy = jest.fn(controllerArg => {
    renderArg = controllerArg;
    return children(controllerArg);
  });
  const wrapper = mount(<ReactCheatSheet {...props}>{childSpy}</ReactCheatSheet>);
  return { childSpy, wrapper, ...renderArg };
}
