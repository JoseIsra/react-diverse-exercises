import React, { useEffect, useRef, useState } from 'react';

export function TestRefThing() {
  const [disable, setDisable] = useState(false);
  const someRef = useRef(0);

  useEffect(() => {
    console.log('first useeffect');
    someRef.current += 1;
  }, [disable]);

  useEffect(() => {
    someRef.current += 1;
  }, [someRef.current]);

  return (
    <div>
      <h1>A ver si revienta el bucle</h1>
      <div>
        <p>El valor de tu ref espero es : {someRef.current}</p>
        <button onClick={() => setDisable(!disable)}>
          {disable ? 'Undisabled' : 'Disable'}
        </button>
      </div>
    </div>
  );
}
