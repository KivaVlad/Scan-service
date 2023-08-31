import React, { Component } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.scss';

import stopWatch from './items/stopwatch.jpg';
import loop from './items/loop.jpg';
import lock from './items/lock.jpg';

export default class FocusOnSelect extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    };
    return (
      <div className='slider_cards'>
        <Slider {...settings}>
          <div className='slider_card'>
            <img src={stopWatch} alt="" />
            <p>Высокая и оперативная скорость <br/>обработки заявки</p>
          </div>

          <div className='slider_card'>
            <img src={loop} alt="" />
            <p>Огромная комплексная база <br/>данных, обеспечивающая <br/>объективный ответ на запрос</p>
          </div>

          <div className='slider_card'>
            <img src={lock} alt="" />
            <p>Защита конфеденциальных сведений, <br/>не подлежащих разглашению по <br/>федеральному законодательству</p>
          </div>

          <div className='slider_card'>
            <img src={stopWatch} alt="" />
            <p>Высокая и оперативная скорость <br/>обработки заявки</p>
          </div>

          <div className='slider_card'>
            <img src={loop} alt="" />
            <p>Огромная комплексная база <br/>данных, обеспечивающая <br/>объективный ответ на запрос</p>
          </div>

          <div className='slider_card'>
            <img src={lock} alt="" />
            <p>Защита конфеденциальных сведений, <br/>не подлежащих разглашению по <br/>федеральному законодательству</p>
          </div>

        </Slider>
  
      </div>
    );
  }
}

