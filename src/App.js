import React from 'react';
import './App.css';
import Locations from './components/Locations.js';
import Map from './components/Map.js';
import MoreInfoOverlay from './components/MoreInfoOverlay.js';
import rioSEOLogo from './assets/rioseo-logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      selectedLocation: {},
      mapImageSrc: '',
      showMoreInfoBoolean: false,
      currentDay: '',
      tacoImageUrls: []
    };
  };

  componentDidMount() {
    this.getLocations();
    this.getCurrentDay();
    this.getTacoImages();
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

  getCurrentDay() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const d = new Date();
    this.setState({ currentDay: days[d.getDay()] });
  }

  getTacoImages() {
    fetch('https://api.unsplash.com/photos/random?query=taco&orientation=landscape&client_id=BCnRdIGHMogdBTr9edVjHtvJCCRElxOjUzLnQdKdksY&count=21')
      .then(response => response.json())
      .then(data => {
        let tacoImageUrls = data.map(imageObj => imageObj.urls.regular);
        this.setState({ tacoImageUrls });
      })
      .catch(err => {
        alert('error fetching images');
      });
  };

  handleLocationCardSelection(locationCard) {
    // console.log(locationCard);
    this.setState({ selectedLocation: locationCard });
    this.setState({ mapImageSrc: `https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=500x950&markers=color:red%7C${locationCard.latitude},${locationCard.longitude}&key=AIzaSyAGOOt8VQhLc41po8ttiL1iZCdQQefBi1E` });
  };

  openMoreInfo() {
    this.setState({ showMoreInfoBoolean: true });
  };

  closeMoreInfo() {
    this.setState({ showMoreInfoBoolean: false });
  };


  render() {
    const { locations, selectedLocation, mapImageSrc, showMoreInfoBoolean, currentDay, tacoImageUrls } = this.state;
    return (
      <div className='App'>
        <h1><img className='companyLogo' alt='riologo' src={rioSEOLogo}></img>Taco Truck Locations</h1>
        <div className='mainContainer'>
          <Locations
            locations={locations}
            selectedLocation={selectedLocation}
            currentDay={currentDay}
            tacoImageUrls={tacoImageUrls}
            handleLocationCardSelection={this.handleLocationCardSelection.bind(this)}
            openMoreInfo={this.openMoreInfo.bind(this)} />
          <Map mapImageSrc={mapImageSrc} />
          {showMoreInfoBoolean &&
            <div className='overlay' onClick={() => this.closeMoreInfo()}>
              <MoreInfoOverlay
                selectedLocation={selectedLocation}
                tacoImageUrl={tacoImageUrls[selectedLocation.id]}
                currentDay={currentDay}
                closeMoreInfo={this.closeMoreInfo.bind(this)} />
            </div>
          }
        </div>
      </div>
    );
  };
};

export default App;
