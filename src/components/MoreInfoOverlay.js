import React from 'react';

const handleViewFullDetailsButtonClick = (locationUrl) => {
  window.open(locationUrl);
};

const MoreInfoOverlay = ({ selectedLocation, closeMoreInfo, showMoreInfo }) => {
  return (
    <div className='moreInfoContainer'>
      <p onClick={() => closeMoreInfo()}>X</p>
      <p>{selectedLocation.name}</p>
      <div className="locationCard-address">
        <p>{selectedLocation.address}</p>
        <p>{selectedLocation.city}, {selectedLocation.state} {selectedLocation.postal_code}</p>
      </div>

      <div className='hours'>
        <div className='hoursDay'>
          <p>Monday</p>
          <p>{selectedLocation.monday_open} - {selectedLocation.monday_close}</p>
        </div>
        <div className='hoursDay'>
          <p>Tuesday</p>
          <p>{selectedLocation.tuesday_open} - {selectedLocation.tuesday_close}</p>
        </div>
        <div className='hoursDay'>
          <p>Wednesday</p>
          <p>{selectedLocation.wednesday_open} - {selectedLocation.wednesday_close}</p>
        </div>
        <div className='hoursDay'>
          <p>Thursday</p>
          <p>{selectedLocation.thursday_open} - {selectedLocation.thursday_close}</p>
        </div>
        <div className='hoursDay'>
          <p>Friday</p>
          <p>{selectedLocation.friday_open} - {selectedLocation.friday_close}</p>
        </div>
        <div className='hoursDay'>
          <p>Saturday</p>
          <p>{selectedLocation.saturday_open} - {selectedLocation.saturday_close}</p>
        </div>
        <div className='hoursDay'>
          <p>Sunday</p>
          <p>{selectedLocation.sunday_open} - {selectedLocation.sunday_close}</p>
        </div>
      </div>

      <button onClick={() => handleViewFullDetailsButtonClick(selectedLocation.url)}>VIEW FULL DETAILS</button>
    </div>
  );

}

export default MoreInfoOverlay;