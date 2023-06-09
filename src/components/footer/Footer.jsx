import React from "react";
import footerLogo from "../../assets/images/footer_logo.png";
import "./footer.scss";

const Footer = () => {

    return(
        <div className='footer'>
        <div className='container'>
            <div className='footer_item'>
                <img src={footerLogo} alt="logo"/>
                <div className='footer_text'>
                <p>г. Москва, Цветной б-р, 40
                +7 495 771 21 11
                info@skan.ru</p>
                <p>by <a target="blank" href='https://github.com/KivaVlad'>@kivavlad</a> 2023</p>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Footer