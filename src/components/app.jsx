import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import cities from '../../data/cities';
import CityList from './city_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: cities[0],
      cities
    };
  }

  center() {
    return {
      latitude: this.state.selectedCity.latitude,
      longitude: this.state.selectedCity.longitude
    };
  }

  selectCity = (index) => {
    this.setState({ selectedCity: cities[index] });
  }

  render() {
    return (
      <div>
        <CityList
          cities={this.state.cities}
          selectedCity={this.state.selectedCity}
          selectCity={this.selectCity}
        />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker latitude={this.state.selectedCity.latitude} longitude={this.state.selectedCity.longitude} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
