import React from 'react';
import './App.css';
import Routes from './Routes';
// import ThemeContext from './context/ThemeContext';

const App = () => {
  // const themes = {
  //   light: {
  //     foreground: "#000000",
  //     background: "red"
  //   },
  //   dark: {
  //     foreground: "#ffffff",
  //     background: "green"
  //   }
  // };

  // const [count, setCount] = useState(0);

  return (
    // <ThemeContext.Provider value={themes.background, { count, setCount }}>
    //   <Routes />
    // </ThemeContext.Provider>
    <div>
      <Routes />
    </div>
  )
}
export default App;
