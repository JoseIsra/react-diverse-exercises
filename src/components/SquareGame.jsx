import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Hello } from './Hello';

function Square({ bgColor, changeColor }) {
  return (
    <div
      style={{ width: '100px', height: '100px', backgroundColor: bgColor }}
      onClick={() => changeColor(bgColor)}
    >
      <p>Click me</p>
    </div>
  );
}

Square.propTypes = {
  bgColor: PropTypes.string,
  changeColor: PropTypes.func,
};

export function SquareGame() {
  const [color, setColor] = useState('gray');

  const changeColor = (newColor) => {
    setColor(newColor);
  };
  return (
    <section style={{ backgroundColor: color }}>
      <h1>Click the square</h1>
      <div>
        <Square changeColor={changeColor} bgColor="green" />
        <Square changeColor={changeColor} bgColor="red" />
        <Square changeColor={changeColor} bgColor="orange" />
        <Square changeColor={changeColor} bgColor="purple" />
        <Square changeColor={changeColor} bgColor="yellow" />
        <Hello />
      </div>
    </section>
  );
}
