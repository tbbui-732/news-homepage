import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';

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

function App() {
  return (
    <div className="App">
      <div className="Navigation">
        <Navigation />
      </div>
      <div className="MainHeading"></div>
      <div className="SideSubHeading"></div>
      <div className="BottomSubHeading"></div>
    </div>
  );
}

export default App;
