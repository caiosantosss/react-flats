import React from 'react';
import City from './city';

const CityList = (props) => {
  const renderList = () => {
    return props.cities.map((city1, index) => {
      return (
        <City
          city={city1}
          key={city1.latatitude}
          selected={city1.city === props.selectedCity.city}
          index={index}
          selectcity={props.selectCity}
        />
      );
    });
  };

  return (
    <div className="city-list">
      {renderList()}
    </div>
  );
};

export default CityList;
