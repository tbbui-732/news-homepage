import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from "./components/Navigation";
import MainHeading from "./components/MainHeading";
import SideSubHeading from './components/SideSubHeading';

/*
Navigation:
  Logo 
  Navigation bar

MainHeading:
  Image
  Title
  Paragraph + Button

SideSubHeading:
  Title
  Subtitle + Paragraph
  Subtitle + Paragraph
  Subtitle + Paragraph

BottomSubHeading
  Image
  Number + Title + Paragraph
  Number + Title + Paragraph
  Number + Title + Paragraph
*/

      // <div className="Navigation">
      //   <Navigation />
      // </div>
      // <div className="MainHeading">
      //   <MainHeading />
      // </div>
      // <div className="SideSubHeading"></div>
      // <div className="BottomSubHeading"></div>

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

      </div>
    </div>
  );
}

export default App;
