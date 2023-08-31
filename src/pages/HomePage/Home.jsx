import React from 'react';
import { useNavigate } from 'react-router-dom';
import FocusOnSelect from "../../components/carousel/Carousel";

import "./home.scss";
import homeImg from "../../assets/images/home.jpg";
import homeUserImg from "../../assets/images/home-bachground-user.jpg";

const Home = ({isLogged}) => {

  const navigate = useNavigate();
  function toSearchPage() {
    if (isLogged) {
      navigate("/search")
    } else {
      alert('Для продолжения необходимо авторизоваться');
    }
  }
  
  return (
    <>
        <div className='container'>
            <div className='home_header'>
                <div className='home_header_text'>
                    <h1 className='title'>
                        сервис по поиску публикаций <br/>о компании <br/>по его ИНН
                    </h1>
                    <p className='home_header_subtext'>
                        Комплексный анализ публикаций, получение данных<br/> в формате PDF на электронную почту.
                    </p>
                    <button onClick={toSearchPage} className='home_header_button'>Запросить данные</button>
                </div>
                <div className='home_header_img'>
                  <img src={homeImg} alt='hero'/>
                </div>
            </div>

            <div className='home_carousel'>
                <h1 className='title home_carousel_title'>Почему именно мы</h1>
                <FocusOnSelect />
            </div>

            <div className='home_images'>
              <div className='home_user_img'>
                <img src={homeUserImg} alt='hero' />
              </div>
              <div className='vector_img'>
                <div className='vector_bg'></div>
                <div className='vector_sm'></div>
              </div>
            </div>

            <div className='rates'>
              <h1 className='title'>наши тарифы</h1>
              <div className='rates_cards'>

              
                {isLogged ?
                <div className='rates_card_active'>
                  <div className='rates_header'>
                    <div className='rates_header_text'>
                      <div className='rates_header_text_title'>Beginner</div>
                      <p>Для небольшого исследования</p>
                    </div>
                    <div className='rates_header_img'></div>
                  </div>
                  <div className='rates_card_price'>799 ₽ <span>1 200 ₽</span><div className='rates_card_tarif'>Текущий тариф</div></div>
                  <div className='rates_card_price_text'>или 150 ₽/мес. при рассрочке на 24 мес.</div>
                  <div className='rates_card_subtitle'>В тариф входит:</div>
                  <ul className='rates_card_list'>
                    <li>Безлимитная история запросов</li>
                    <li>Безопасная сделка</li>
                    <li>Поддержка 24/7</li>
                  </ul>
                  <button className='rates_card_button_active'>Перейти в личный кабинет</button>
                </div>
                :
                <div className='rates_card'>
                  <div className='rates_header'>
                    <div className='rates_header_text'>
                      <div className='rates_header_text_title'>Beginner</div>
                      <p>Для небольшого исследования</p>
                    </div>
                    <div className='rates_header_img'></div>
                  </div>
                  <div className='rates_card_price'>799 ₽ <span>1 200 ₽</span></div>
                  <div className='rates_card_price_text'>или 150 ₽/мес. при рассрочке на 24 мес.</div>
                  <div className='rates_card_subtitle'>В тариф входит:</div>
                  <ul className='rates_card_list'>
                    <li>Безлимитная история запросов</li>
                    <li>Безопасная сделка</li>
                    <li>Поддержка 24/7</li>
                  </ul>
                  <button className='rates_card_button'>Подробнее</button>
                </div>
                }
                <div className='rates_card rates_card_pro'>
                  <div className='rates_header rates_header_pro'>
                    <div className='rates_header_text'>
                      <div className='rates_header_text_title'>Pro</div>
                      <p>Для HR и фрилансеров</p>
                    </div>
                    <div className='rates_header_img_pro'></div>
                  </div>
                  <div className='rates_card_price'>1 299 ₽ <span>2 600 ₽</span></div>
                  <div className='rates_card_price_text'>или 279 ₽/мес. при рассрочке на 24 мес.</div>
                  <div className='rates_card_subtitle'>В тариф входит:</div>
                  <ul className='rates_card_list'>
                    <li>Все пункты тарифа Beginner</li>
                    <li>Экспорт истории</li>
                    <li>Рекомендации по приоритетам</li>
                  </ul>
                  <button className='rates_card_button'>Подробнее</button>
                </div>

                <div className='rates_card rates_card_business'>
                  <div className='rates_header rates_header_business'>
                    <div className='rates_header_text'>
                      <div className='rates_header_text_title_business'>Business</div>
                      <p>Для корпоративных клиентов</p>
                    </div>
                    <div className='rates_header_img_business'></div>
                  </div>
                  <div className='rates_card_price rates_card_price_business'>2 379 ₽ <span>3 700 ₽</span></div>
                  <div className='rates_card_subtitle'>В тариф входит:</div>
                  <ul className='rates_card_list'>
                    <li>Все пункты тарифа Pro</li>
                    <li>Безлимитное количество запросов</li>
                    <li>Приоритетная поддержка</li>
                  </ul>
                  <button className='rates_card_button'>Подробнее</button>
                </div>

              </div>
            </div>
        </div>
      </>
  )
}

export default Home;
