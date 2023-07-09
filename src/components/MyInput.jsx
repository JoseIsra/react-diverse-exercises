/**
 * A simple input to test
 * the forwardRef hook or whatever
 *
 */
import React, { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} placeholder="focus-me" />;
});

export default MyInput;
