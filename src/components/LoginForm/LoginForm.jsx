import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import goodleImg from './images/google.png';
import facebookImg from './images/fb.png';
import yandexImg from './images/yandex.png';
import './loginform.scss';

const LoginForm = () => {
    const navigate = useNavigate();

    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    function onSubmit(data) {
        axios.post('https://gateway.scan-interfax.ru/api/v1/account/login', data)
        .then((response) => {
            const token = response.data;
            localStorage.setItem("token", token);
            reset();
            toHomePage();
            console.log(token);
            alert('Успешный вход');
        })
        .catch((error) => {
            console.log(error);
            alert('Пользователь не найден');
        })
    }

    function toHomePage() {
        navigate('/');
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
            <a href='#!' className='form_header_links form_header_links_active'>Войти</a>
            <a href='#!' className='form_header_links'>Зарегистрироваться</a>
        </div>
        <div className='form'>
            <h3 className='form_text'>Логин или номер телефона: sf_student1</h3>
            <input
                {...register("login", { required: true })} 
                aria-invalid={errors.text ? "true" : "false"} 
                type='text'
            />
            <div className='errors_form_string'>
                {errors.login?.type === 'required' && <div style={errorFormStyle} role="alert">Введите корректные данные</div>}
            </div>

            <h3 className='form_text'>Пароль: 4i2385j</h3>
            <input 
                {...register("password", { required: true })} 
                aria-invalid={errors.password ? "true" : "false"}
                type="password" 
            />
            <div className='errors_form_string'>
                {errors.password?.type === 'required' && <div style={errorFormStyle} role="alert">Неправильный пароль</div>}
            </div>

            <button type='submit' className='form_button'>Войти</button>
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
