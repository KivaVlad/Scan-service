import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../../axios/axios";
import ButtonLoader from "../ButtonLoader/ButtonLoader";

import goodleImg from './images/google.png';
import facebookImg from './images/fb.png';
import yandexImg from './images/yandex.png';
import './loginform.scss';



const LoginForm = (props) => {
    const {setIsLogged} = props;
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [errorsForm, setErrorsFrom] = useState(false);
    const navigate = useNavigate();

    async function onSubmit(data) {
        setIsLoading(true);
        await
        api.post('/api/v1/account/login', data)
        .then((response) => {
            setIsLoading(false);
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("expire", response.data.expire);
            setIsLogged(true);
            reset();
            navigate('/');
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setErrorsFrom(true);
            setIsLoading(false);
        })
    }

    const errorFormStyle = {
        fontSize: '12px',
        color: '#FF5959',
        textAlign: 'center',
        marginTop: '6px'
    };
  
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='registration_container'>

            <div className='form_header'>
                <Link to='/login' className='form_header_links form_header_links_active'>Войти</Link>
                <Link to='*' className='form_header_links'>Зарегистрироваться</Link>
            </div>

            <div className='form'>
                <h3 className='form_text'>Логин или номер телефона: sf_student1</h3>
                <input
                    {...register("login", { required: true })} 
                    aria-invalid={errors.text ? "true" : "false"} 
                    type='text'
                    autoComplete="off"
                />
                <div className='errors_form_string'>
                    {errors.login?.type === 'required' || errorsForm ? <div style={errorFormStyle} role="alert">Введите корректные данные</div> : <></>}
                </div>

                <h3 className='form_text'>Пароль: 4i2385j</h3>
                <input 
                    {...register("password", { required: true })} 
                    aria-invalid={errors.password ? "true" : "false"}
                    type="password" 
                />
                <div className='errors_form_string'>
                    {errors.password?.type === 'required' || errorsForm ? <div style={errorFormStyle} role="alert">Неправильный пароль</div> : <></>}
                </div>

                <button type='submit' className='form_button'>{isLoading ? (<ButtonLoader />) : 'Войти'}</button>
                <Link to='*' className='form_restore_pass'>Восстановить пароль</Link>
            </div>

            <div className='form_links'>
                <h3 className='form_text'>Войти через:</h3>
                <div className='form_links_img'>
                    <img src={goodleImg} alt='google'/>
                    <img src={facebookImg} alt='facebook' />
                    <img src={yandexImg} alt='yandex' />
                </div>
            </div>

        </form>
    );
}

export default LoginForm;
