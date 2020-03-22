import React, { Component } from 'react'

import { ReactComponent as Check } from './icons/check.svg'
import './Apartment.scss'

class Apartment extends Component {
  formatPrice = price => {
    return `${price.toLocaleString()}₽`
  }

  render() {
    const {
      address,
      station,
      stationColor,
      price,
      status,
      area,
      livingArea,
      rooms,
      floor,
      floorsCount,
      distanceToStation
    } = this.props.apartment

    const styles = {
      backgroundColor: stationColor
    }

    return (
      <div className="Apartment">
        <div className="Apartment__accent">{address}</div>

        <div className="Apartment__station">
          <p>
            <span className="Apartment__mark" style={styles}></span>
            <span>{station}</span> ·{' '}
            <span className="Apartment__description">{distanceToStation}</span>
          </p>
        </div>

        <div className="Apartment__details">
          <div className="Apartment__container">
            <span>{rooms}</span>
            <span>комнат</span>
          </div>

          <div className="Apartment__container">
            <span>
              <span>{area}</span> / <span>{livingArea}</span> м<sup>2</sup>
            </span>
            <span className="">
              <span>общая</span> / <span>жилая</span>
            </span>
          </div>

          <div className="Apartment__container">
            <span>
              <span>{floor}</span> / <span>{floorsCount}</span>
            </span>
            <span>этажность</span>
          </div>
        </div>

        <div className="Apartment__info">
          <div className="Apartment__accent">{this.formatPrice(price)}</div>

          {status === 'booked' && (
            <div className="Apartment__status Apartment__status_booked">
              <span className="Apartment__icon-checked">
                <Check width="12" height="12" />
              </span>
              Сдано
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Apartment
