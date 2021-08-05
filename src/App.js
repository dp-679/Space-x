import React from "react";
import './App.css';
import Header from "./components/Header";
import Launch from "./components/Launch/Launch";



function App() {
  return (
    <div className="App">
      <Header/>
      <Launch 
      banner="https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg"
      title="FalconSat"
      launchData="2006-03-25T10:30:00+12:00"
      description="First launch under USAF's OSP 3 launch contract. First SpaceX launch to put a satellite to an orbit with an orbital altitude many times the distance to the Moon: Sun-Earth libration point L1. The first stage made a test flight descent to an over-ocean landing within 10 m (33 ft) of its intended target.
" /> 
        
    </div>
  );
}

export default App;
