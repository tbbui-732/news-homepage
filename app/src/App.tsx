import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from "./components/Navigation";
import MainHeading from "./components/MainHeading";
import SideSubHeading from './components/SideSubHeading';
import BottomSubHeading from './components/BottomSubHeading';

function App() {
  return (
    <div className="App">
      <div className="Top"> 
        <Navigation /> 
      </div>

      <div className="Middle"> 
        <MainHeading /> 
        <SideSubHeading />
      </div>

      <div className="Bottom">
        <BottomSubHeading />
      </div>
    </div>
  );
}

export default App;
