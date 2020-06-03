import React, { useRef, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';

const SamplePage = () => {
  const inputEl = useRef(null);
  const theme = useContext(ThemeContext);
  const { count, setCount } = useContext(ThemeContext);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <>
        <h2>Hello</h2>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
      <h1 style={{ color: "red" }}>Count: {count}</h1>
      <button onClick={() => setCount(0)}>Start</button>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>

      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
    </button>
    </div>
  )
}

export default withRouter(SamplePage);