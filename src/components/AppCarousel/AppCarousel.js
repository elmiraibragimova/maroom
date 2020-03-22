import React, { Component } from 'react'
import axios from 'axios'

import CarouselItem from '../CarouselItem/CarouselItem'
import './AppCarousel.scss'

class AppCarousel extends Component {
  state = {
    apartments: []
  }

  componentDidMount() {
    axios.get(`http://www.mocky.io/v2/5e774edd3300004c00099f2c`).then(res => {
      const apartments = [...res.data.apartments]
      this.setState({ apartments })
    })
  }

  render() {
    const { apartments } = this.state

    return (
      <div className="AppCarousel">
        <div className="AppCarousel__controls">
          <div className="AppCarousel__counter">
            <span>3</span> / <span>3</span>
          </div>

          <div className="AppCarousel__nav">
            <button type="button" className="AppCarousel__button">
              <span>←</span>
            </button>
            <button type="button" className="AppCarousel__button">
              <span>→</span>
            </button>
          </div>
        </div>

        <div className="AppCarousel__container">
          {apartments.map((apartment, index) => {
            return (
              <div key={index}>
                <CarouselItem apartment={apartment} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AppCarousel
