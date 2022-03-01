import React from 'react';
import './App.css';
import Locations from './components/Locations.js';
import Map from './components/Map.js';
import MoreInfoOverlay from './components/MoreInfoOverlay.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      selectedLocation: {},
      mapImageSrc: '',
      showMoreInfo: false,
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
      <div className='App'>
        <h1>Taco Truck Locations</h1>
        <div className='mainContainer'>
          <Locations
            locations={this.state.locations}
            selectedLocation={this.state.selectedLocation}
            currentDay={this.state.currentDay}
            handleLocationCardSelection={this.handleLocationCardSelection.bind(this)}
            openMoreInfo={this.openMoreInfo.bind(this)} />
          <Map mapImageSrc={this.state.mapImageSrc} />
          {this.state.showMoreInfo &&
            <div className='overlay' onClick={() => this.closeMoreInfo()}>
              <MoreInfoOverlay
                selectedLocation={this.state.selectedLocation}
                showMoreInfo={this.state.showMoreInfo}
                tacoImageUrl={this.state.tacoImageUrls[this.state.selectedLocation.id]}
                currentDay={this.state.currentDay}
                closeMoreInfo={this.closeMoreInfo.bind(this)} />
            </div>
          }
        </div>
      </div>
    );
  };
};

export default App;
