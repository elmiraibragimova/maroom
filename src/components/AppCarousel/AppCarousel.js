import React, { Component } from 'react'
import axios from 'axios'

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'

import 'pure-react-carousel/dist/react-carousel.es.css'

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
        <CarouselProvider
          naturalSlideWidth={100}
          totalSlides={3}
          dragEnabled={true}
          visibleSlides={1}
          isIntrinsicHeight={true}
        >
          <div className="AppCarousel__controls">
            <div className="AppCarousel__counter">
              <span>3</span> / <span>3</span>
            </div>

            <div className="AppCarousel__nav">
              <ButtonBack className="AppCarousel__button">
                <span className="AppCarousel__arrow">←</span>
                <span className="AppCarousel__chevron left"></span>
              </ButtonBack>
              <ButtonNext className="AppCarousel__button">
                <span className="AppCarousel__arrow">→</span>
                <span className="AppCarousel__chevron right"></span>
              </ButtonNext>
            </div>
          </div>

          <div className="AppCarousel__container">
            <Slider>
              {apartments.map((apartment, index) => {
                return (
                  <Slide index={index}>
                    <div key={index}>
                      <CarouselItem apartment={apartment} />
                    </div>
                  </Slide>
                )
              })}
            </Slider>
          </div>
        </CarouselProvider>
      </div>
    )
  }
}

export default AppCarousel
