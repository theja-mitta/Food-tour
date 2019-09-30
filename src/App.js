import React from 'react';
import './App.css';
import './fonts/DIN-Condensed-Bold.ttf';
import './fonts/GillSans.ttc';
// import Header from './components/Header';
import About from './components/About';
import Community from './components/Community';
import MapWrapper from './components/MapWrapper';
import OurMenu from './components/OurMenu';
import Navigation from './components/Navigation';
import { ParallaxProvider } from "react-skrollr";
import CarouselBars from './components/CarouselBars';


function App() {
  return (
      <div className="App">
        <Navigation />
        <div id="section1">
          <About />
        </div>
        <div id="section2">
        <ParallaxProvider
          init={{
            smoothScrollingDuration: 1000,
            smoothScrolling: true,
            forceHeight: false
          }}
          getScrollTop={scrollTop => console.log("scrollTop", scrollTop)}
        >          
          <OurMenu />
        </ParallaxProvider>
        </div>
        <div id="section3">
          <MapWrapper />
        </div>
        <div id="section4">
          <Community />
        </div>  
        <CarouselBars />
      </div>
  );
}

export default App;
