import React from 'react';
import './App.css';
import Locations from './components/Locations.js';
import Map from './components/Map.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      selectedLocation: {},
      mapImageSrc: ''
    };

    this.handleLocationCardSelection = this.handleLocationCardSelection.bind(this);
  };

  componentDidMount() {
    this.getLocations();
  };

  getLocations() {
    fetch('https://my.api.mockaroo.com/locations.json?key=a45f1200')
      .then(response => response.json())
      .then(data => {
        this.setState({ locations: data });
      })
      .catch(err => {
        console.log('ERR: ', err);
        alert('Failed to load, try again!');
      });
  };

  handleLocationCardSelection(locationCard) {
    console.log(locationCard);
    this.setState({ selectedLocation: locationCard });
    this.setState({ mapImageSrc: `https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=500x950&markers=color:red%7C${locationCard.latitude},${locationCard.longitude}&key=AIzaSyAGOOt8VQhLc41po8ttiL1iZCdQQefBi1E` });
  };


  render() {
    return (
      <div className="App">
        <h1>Taco Truck Locator</h1>
        <div className="mainContainer">
          <Locations
            locations={this.state.locations}
            handleLocationCardSelection={this.handleLocationCardSelection}
            selectedLocation={this.state.selectedLocation} />
          <Map mapImageSrc={this.state.mapImageSrc} />
        </div>
      </div>
    );
  };
};

export default App;
