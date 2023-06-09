import React from "react";
import "./loginPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm";

import registrImage from "../../assets/images/Characters.jpg";
import lockImg from "../../assets/images/lock.png";

const LoginPage = (props) => {

    return(
        <>
        <div className='container'>
            <div className='registration_content'>
                <div className='registration_text'>
                    <h1 className='title registration_title'>
                        Для оформления подписки на тариф, необходимо авторизоваться
                    </h1>
                      <img className='registration_image' src={registrImage} />
                </div>
                <div className='registration_form'>
                  <img className='lock_img' src={lockImg} />
                  <LoginForm {...props}/>
                </div>
                  <img className='registration_img_mobile' src={registrImage} />
            </div>
        </div>
        </>
    )
}

export default LoginPage