// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Locations from './components/Locations.js';
import Map from './components/Map.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Taco Truck Locator</h1>
        <div className="mainContainer">
          <Locations />
          <Map />
        </div>
      </div>
    )
  }
}

export default App;
