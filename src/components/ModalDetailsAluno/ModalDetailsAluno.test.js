import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ModalDetailsAluno from './ModalDetailsAluno';


/**
 * This set of beforeEach/afterEach functions serve to prevent code from
 * being accidentally run outside of a test's context.
 *
 * Basically we catch all intervals and timeouts set during a test, and
 * then clear them when the test is done running.
 */
const setTimeouts = [];
const setIntervals = [];
const originalSetTimeout = setTimeout;
const originalSetInterval = setInterval;

beforeEach(() => {
  global.setTimeout = function wrappedSetTimeout(...args) {
    const id = originalSetTimeout.apply(this, args);
    setTimeouts.push(id);
    return id;
  };

  global.setInterval = function wrappedSetInterval(...args) {
    const id = originalSetInterval.apply(this, args);
    setIntervals.push(id);
    return id;
  };
});

afterEach(() => {
  while (setTimeouts.length) { clearTimeout(setTimeouts.pop()); } // clear timeouts
  while (setIntervals.length) { clearInterval(setIntervals.pop()); } // clear intervals
  global.setTimeout = originalSetTimeout;
  global.setInterval = originalSetInterval;
});


it('renders a component using shallow from Enzyme', () => {
  shallow(<ModalDetailsAluno />);
});
//
it('renders welcome message', () => {
  const wrapper = shallow(<ModalDetailsAluno />);
  const welcome = <h2>Welcome to React</h2>;

  expect(wrapper.contains(welcome)).toEqual(true);
});
