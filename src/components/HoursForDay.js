import React from 'react';

const HoursForDay = ({ day, selectedLocation, currentDay }) => {
  let hoursDayStyle = day === currentDay ? { color: 'orangered' } : { color: 'rgb(71, 68, 68)' };
  return (
    <div className='hoursDayContainer'>
      <p style={hoursDayStyle}>{day.charAt(0).toUpperCase() + day.slice(1)}</p>
      <p style={hoursDayStyle}>{selectedLocation[`${day}_open`]} - {selectedLocation[`${day}_close`]}</p>
    </div>
  );
};

export default HoursForDay;