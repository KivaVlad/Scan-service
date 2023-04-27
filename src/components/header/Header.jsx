import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import css from "./header.css";

import logo from "../../assets/images/logo.png";
import footerLogo from "../../assets/images/footer_logo.png";

const Header = () => {
    let [activeState, setActiveState] = useState(false);

    return(
        <>
        <div className='container'>
            <div className='header_list'>
                <img src={logo} />
                <div className={`header_nav ${activeState && 'header_nav_active'}`}>
                    <div className='header_nav_logo'>
                      <img src={footerLogo} />
                    </div>
                    <div className='header_nav_items'>
                      <NavLink to="/" onClick={ () => setActiveState(activeState = !activeState)} className='header_nav_items_link'>Главная</NavLink>
                      <NavLink to="*" onClick={ () => setActiveState(activeState = !activeState)} className='header_nav_items_link'>Тарифы</NavLink>
                      <NavLink to="*" onClick={ () => setActiveState(activeState = !activeState)} className='header_nav_items_link'>FAQ</NavLink>
                    </div>
                    <div className='header_nav_form'>
                      <Link to='/login' onClick={ () => setActiveState(activeState = !activeState)} className='header_form_subtext'>Зарегистрироваться</Link>
                      <Link to='/login' onClick={ () => setActiveState(activeState = !activeState)} className='header_button'>Войти</Link>
                    </div>
                    <div onClick={ () => setActiveState(activeState = !activeState)} className='header_nav_close'>
                      <span className='header_nav_close_line'></span>
                      <span className='header_nav_close_line'></span>
                    </div>
                </div>
                <div className='header_form'>
                    <Link to='/login' className='header_form_subtext'>Зарегистрироваться</Link>
                    <Link to='/login' className='header_button'>Войти</Link>
                </div>
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