/**
 * The forwardref ref training
 */

import React, { useRef } from 'react';
import MyInputForwarded from './MyInput';

const demo = '<p>una etiqueta p </p>';
export function TheForward() {
  const inputRef = useRef();
  const goFocus = () => {
    console.log('input ref?', inputRef.current);
    inputRef.current.focus();
  };
  return (
    <section>
      <div>
        <p>Some HTML</p>
        <div dangerouslySetInnerHTML={{ __html: demo }}></div>
      </div>
      <MyInputForwarded ref={inputRef} />
      <button onClick={goFocus}>Go Focus</button>
    </section>
  );
}
