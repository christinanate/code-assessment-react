import React from 'react';
import axios from 'axios';
import './App.css';
import Locations from './components/Locations.js';
import Map from './components/Map.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  };

  getLocations() {
    axios.get('https://my.api.mockaroo.com/locations.json?key=a45f1200')
      .then(results => {
        console.log('results: ', results.data);
        this.setState({ locations: results.data });
      })
      .catch(err => {
        console.log('err', err);
        alert('Failed to load, try again!');
      });
  };

  componentDidMount() {
    this.getLocations();
  };

  render() {
    return (
      <div className="App">
        <h1>Taco Truck Locator</h1>
        <div className="mainContainer">
          <Locations locations={this.state.locations} />
          <Map />
        </div>
      </div>
    );
  };
};

export default App;
