import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";

import { API_BASE_URL } from "../../config";

import goodleImg from './images/google.png';
import facebookImg from './images/fb.png';
import yandexImg from './images/yandex.png';
import css from './loginform.css';

const LoginForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const {mutate, isLoading} = useMutation(
        'login',
        () => 
            axios.post(
                `${API_BASE_URL}/api/v1/account/login`,
                { login, password },
                {
                    headers: 'accept: application/json',
                    headers: 'Content-Type: application/json-patch+json',
                }
            ),
            {
                
            }
    );

    
    
    const errorFormStyle = {
        fontSize: '12px',
        color: '#FF5959',
        textAlign: 'center',
        marginTop: '6px'
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className='registration_container'>
        <div className='form_header'>
            <a href='#!' className='form_header_links form_header_links_active'>Войти</a>
            <a href='#!' className='form_header_links'>Зарегистрироваться</a>
        </div>
        <div className='form'>
            <h3 className='form_text'>Логин или номер телефона:</h3>
            <input
                {...register("username", { required: true })} 
                aria-invalid={errors.text ? "true" : "false"} 
                type='text'
                value={login}
                onChange={e => setLogin(e.target.value)}
            />
            <div className='errors_form_string'>
                {errors.username?.type === 'required' && <div style={errorFormStyle} role="alert">Введите корректные данные</div>}
            </div>

            <h3 className='form_text'>Пароль:</h3>
            <input 
                {...register("password", { required: true })} 
                aria-invalid={errors.password ? "true" : "false"}
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div className='errors_form_string'>
                {errors.password?.type === 'required' && <div style={errorFormStyle} role="alert">Неправильный пароль</div>}
            </div>

            <button
                onClick={() => mutate()}
                disabled={isLoading}
                type='submit' 
                className='form_button'
            >
                Войти
            </button>

            <a href='#!' className='form_restore_pass'>Восстановить пароль</a>
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

export default LoginForm
