import React, { Component } from 'react'

import AppCarousel from '../AppCarousel/AppCarousel'
import './ApartmentsDemo.scss'

class ApartmentsDemo extends Component {
  render() {
    return (
      <article className="ApartmentsDemo">
        <section className="ApartmentsDemo__intro">
          <div className="ApartmentsDemo__container">
            <div className="ApartmentsDemo__info">
              <h2>Ваша квартира в надежных руках</h2>
              <p>
                Мы оцениваем квартиру и даем рекомендации собственнику по
                устранению недостатков в квартире, проверяем подлинность и
                актуальность правоустанавливающих документов.
              </p>
            </div>
            <div className="ApartmentsDemo__details">
              <div>
                <span className="ApartmentsDemo__accent">179</span>
                <span className="ApartmentsDemo__description">
                  квартир в обслуживании
                </span>
              </div>
              <div>
                <span className="ApartmentsDemo__accent">1482</span>
                <span className="ApartmentsDemo__description">
                  часов сэкономлено
                </span>
              </div>
              <div>
                <span className="ApartmentsDemo__accent">5+</span>
                <span className="ApartmentsDemo__description">лет работы</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ApartmentsDemo__carousel">
          <AppCarousel />
        </section>
      </article>
    )
  }
}

export default ApartmentsDemo
