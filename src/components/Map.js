import React from 'react';

const Map = ({ mapImageSrc }) => {
  return (
    <div className="mapContainer">
      {
        mapImageSrc ?
          <img src={mapImageSrc} alt='map'></img> :
          <p>Select location to load map</p>
      }
    </div>
  );
};

export default Map;