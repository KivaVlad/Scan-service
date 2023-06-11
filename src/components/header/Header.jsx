import React from "react";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import AccountInfo from "./account-info/AccountInfo";

import "./header.scss";
import logo from "../../assets/images/logo.png";
import userLogo from "../../assets/images/user-icon.png";
import footerLogo from "../../assets/images/footer_logo.png";

const Header = (props) => {
  const {isLogged, setIsLogged} = props;
  const navigate = useNavigate();
  let [activeState, setActiveState] = useState(false);

  const handleLogOutBtn = () => {
    setIsLogged(!isLogged);
    localStorage.clear();
    navigate('/');
  }
 
    return(
        <>
        <div className='container'>
            <div className='header_list'>
                <img src={logo} alt="logo"/>
                <div className={`header_nav ${activeState && 'header_nav_active'}`}>
                    <div className='header_nav_logo'>
                      <img src={footerLogo} alt="logo"/>
                    </div>
                    <div className='header_nav_items'>
                      <NavLink to="/" onClick={ () => setActiveState(activeState = !activeState)} className='header_nav_items_link'>Главная</NavLink>
                      <NavLink to="*" onClick={ () => setActiveState(activeState = !activeState)} className='header_nav_items_link'>Тарифы</NavLink>
                      <NavLink to="*" onClick={ () => setActiveState(activeState = !activeState)} className='header_nav_items_link'>FAQ</NavLink>
                    </div>
                    {isLogged ? 
                    <div className="header_nav_account_info">
                      <div className="header_nav_account_wrapper">
                        <AccountInfo />
                      </div>

                      <div className="header_nav_user_active">
                        <div className="header_user_active_container">
                          <div className="header_user_name">Владислав К. </div>
                          <button 
                            onClick={() => {
                              handleLogOutBtn();
                              setActiveState(activeState = !activeState);
                            }}
                            className="header_user_buttonLogOut"
                          >
                            Выйти
                          </button>
                        </div>
                        <img src={userLogo} alt="icon" />
                      </div> 
                    </div>
                    :
                    <div className='header_nav_form'>
                      <Link to='/login' onClick={ () => setActiveState(activeState = !activeState)} className='header_form_subtext'>Зарегистрироваться</Link>
                      <Link to='/login' onClick={ () => setActiveState(activeState = !activeState)} className='header_button'>Войти</Link>
                    </div>
                    }
                    <div onClick={ () => setActiveState(activeState = !activeState)} className='header_nav_close'>
                      <span className='header_nav_close_line'></span>
                      <span className='header_nav_close_line'></span>
                    </div>
                </div>

                {isLogged ?
                <div className="header_accounf_info">
                  <div className="header_account_wrapper">
                    <AccountInfo />
                  </div>
                  <div className="header_user_active">
                    <div className="header_user_active_container">
                      <div className="header_user_name">Владислав К. </div>
                      <button 
                        onClick={handleLogOutBtn}
                        className="header_user_buttonLogOut"
                      >
                        Выйти
                      </button>
                    </div>
                    <img src={userLogo} alt="icon" />
                  </div>  
                </div>
                    :
                <div className='header_form'>
                  <Link to='/login' className='header_form_subtext'>Зарегистрироваться</Link>
                  <Link to='/login' className='header_button'>Войти</Link>
                </div>
                }
                <div onClick={ () => setActiveState(activeState = !activeState) } className='header_burger'>
                  <span className='burger_line burger_line_first'></span>
                  <span className='burger_line burger_line_second'></span>
                  <span className='burger_line burger_line_third'></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header