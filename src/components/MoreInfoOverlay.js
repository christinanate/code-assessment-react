import React from 'react';
import HoursForDay from './HoursForDay.js';
import phoneIcon from '../assets/phone-icon.png';

const handleViewFullDetailsButtonClick = (locationUrl) => {
  window.open(locationUrl);
};

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const MoreInfoOverlay = ({ selectedLocation, closeMoreInfo, currentDay, tacoImageUrl }) => {
  return (
    <div className='moreInfoContainer'>
      <p style={{ color: 'darkgrey', cursor: 'pointer' }} onClick={() => closeMoreInfo()}>X</p>

      <div className='tacoImgContainer'>
        <img className='tacoImg' alt='taco' src={tacoImageUrl}></img>
      </div>

      <p style={{ fontWeight: '600' }}>{selectedLocation.name}</p>

      <div className='addressContainer'>
        <p>{selectedLocation.address}</p>
        <p>{selectedLocation.city}, {selectedLocation.state} {selectedLocation.postal_code}</p>
      </div>

      <p><img alt='phoneIcon' src={phoneIcon}></img> (605) 258 6978</p>

      {days.map((day, index) => <HoursForDay key={index} day={day} selectedLocation={selectedLocation} currentDay={currentDay} />)}

      <div className='buttonContainer'>
        <button style={{ width: '300px' }} onClick={() => handleViewFullDetailsButtonClick(selectedLocation.url)}>VIEW FULL DETAILS</button>
      </div>
    </div>
  );

}

export default MoreInfoOverlay;