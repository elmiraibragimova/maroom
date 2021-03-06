import React, { Component } from 'react'

import Apartment from '../Apartment/Apartment'
import './CarouselItem.scss'

class CarouselItem extends Component {
  render() {
    const { photo, address } = this.props.apartment
    return (
      <div className="CarouselItem">
        <img src={photo} alt={`Apartment on ${address}`} />
        <div className="CarouselItem__details">
          <Apartment apartment={this.props.apartment} />
        </div>
      </div>
    )
  }
}

export default CarouselItem
