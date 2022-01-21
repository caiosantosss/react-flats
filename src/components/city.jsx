import React, { Component } from 'react';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.index);
  }

  render() {
    return (
      <div className={`card${this.props.selected ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.city.imageUrl}')` }}>
        <div className="card-category">{this.props.city.price} {this.props.city.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.city.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default City;
