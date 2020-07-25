import React, { lazy, Suspense } from 'react';
import './App.css';
import Loader from 'react-loader-spinner'
// import Routes from './Routes';
// import ThemeContext from './context/ThemeContext';

const Routes = lazy(() => import('./Routes'));
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
      <Suspense fallback={<Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />}>
        <Routes />
      </Suspense>
    </div >
  )
}
export default App;
