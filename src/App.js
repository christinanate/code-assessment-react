import React from 'react';
import './App.css';
import Locations from './components/Locations.js';
import Map from './components/Map.js';
import MoreInfoOverlay from './components/MoreInfoOverlay.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [{
        "id": 1,
        "name": "Schmeler Inc",
        "url": "http://mapy.cz/quam/sapien/varius/ut.jsp",
        "address": "742 Bashford Court",
        "city": "Fort Wayne",
        "state": "IN",
        "postal_code": "46862",
        "latitude": "41.0938",
        "longitude": "-85.0707",
        "monday_open": "9:41 AM",
        "monday_close": "4:42 PM",
        "tuesday_open": "9:08 AM",
        "tuesday_close": "9:49 PM",
        "wednesday_open": "6:56 AM",
        "wednesday_close": "5:15 PM",
        "thursday_open": "9:57 AM",
        "thursday_close": "8:10 PM",
        "friday_open": "6:43 AM",
        "friday_close": "5:31 PM",
        "saturday_open": "6:45 AM",
        "saturday_close": "4:43 PM",
        "sunday_open": "8:14 AM",
        "sunday_close": "4:05 PM"
      }],
      selectedLocation: {},
      mapImageSrc: '',
      showMoreInfo: false
    };
  };

  componentDidMount() {
    // this.getLocations();
  };

  getLocations() {
    fetch('https://my.api.mockaroo.com/locations.json?key=a45f1200')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
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


  openMoreInfo() {
    this.setState({ showMoreInfo: true });
  };

  closeMoreInfo() {
    this.setState({ showMoreInfo: false });
  };

  render() {
    return (
      <div className="App">
        <h1>Taco Truck Locator</h1>
        <div className="mainContainer">
          <Locations
            locations={this.state.locations}
            handleLocationCardSelection={this.handleLocationCardSelection.bind(this)}
            selectedLocation={this.state.selectedLocation}
            openMoreInfo={this.openMoreInfo.bind(this)} />
          <Map mapImageSrc={this.state.mapImageSrc} />
          {this.state.showMoreInfo &&
            <div className='overlay' onClick={() => this.closeMoreInfo()}>
              <MoreInfoOverlay
                selectedLocation={this.state.selectedLocation}
                closeMoreInfo={this.closeMoreInfo.bind(this)}
                showMoreInfo={this.state.showMoreInfo} />
            </div>
          }
        </div>
      </div>
    );
  };
};

export default App;
