import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./searchForm.scss";

const SearchForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    const errorSearchFormStyle = {
        fontSize: '10px',
        color: '#FF5959',
        paddingTop: '6px',
    };

    const navigate = useNavigate();
    function toResultPage() {
        navigate("/result");
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="search_wrapper">
                <div className="search_wrapper_top">
                    <div className="search_wrapper_inputs">

                        <h3 className='search_form_text'>ИНН компании*</h3>
                        <input className="search_form_input"
                            {...register("company", { required: true, minLength: 10, maxLength: 10 })} 
                            aria-invalid={errors.number ? "true" : "false"} 
                            type='number'
                            placeholder="10 цифр"
                        />
                        <div className='search_errors_form_string'>
                            {errors.company?.type === 'required' && <div style={errorSearchFormStyle} role="alert">Введите корректные данные</div>}
                            {errors.company?.type === 'minLength' && <div style={errorSearchFormStyle} role="alert">Введите корректные данные</div>}
                            {errors.company?.type === 'maxLength' && <div style={errorSearchFormStyle} role="alert">Введите корректные данные</div>}
                        </div>

                        <h3 className='search_form_text'>Тональность</h3>
                        <select className="search_form_input"
                            {...register("category", { required: true })}>
                            <option value="">Любая</option>
                            <option value="A">Любая</option>
                            <option value="B">Любая</option>
                        </select>
                        <div className='search_errors_form_string'></div>

                        <h3 className='search_form_text'>Количество документов в выдаче*</h3>
                        <input className="search_form_input"
                            {...register("number", { required: true, minLength: 1, maxLength: 1000 })} 
                            aria-invalid={errors.number ? "true" : "false"} 
                            type='number'
                            placeholder="От 1 до 1000"
                        />
                        <div className='search_errors_form_string'>
                            {errors.number?.type === 'required' && <div style={errorSearchFormStyle} role="alert">Обязательное поле</div>}
                            {errors.number?.type === 'minLength' && <div style={errorSearchFormStyle} role="alert">Обязательное поле</div>}
                            {errors.number?.type === 'maxLength' && <div style={errorSearchFormStyle} role="alert">Обязательное поле</div>}
                        </div>

                        <h3 className='search_form_text'>Диапазон поиска*</h3>

                    </div>

                    <div className="search_wrapper_checkboxs">
                        <div className="search_checkbox_box"><input type="checkbox" /><label className="search_checkbox_text" >Признак максимальной полноты</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" /><label className="search_checkbox_text" >Упоминания в бизнес-контексте</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" /><label className="search_checkbox_text" >Главная роль в публикации</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" /><label className="search_checkbox_text" >Публикации только с риск-факторами</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" /><label className="search_checkbox_text" >Включать технические новости рынков</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" /><label className="search_checkbox_text" >Включать анонсы и календари</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" /><label className="search_checkbox_text" >Включать сводки новостей</label></div>
                    </div>
                </div>

                <div className="search_data_container">
                    <div>
                        <div className="search_data_container_inputs">
                            <input className="search_form_data_input"
                            {...register("date", { required: true })} 
                            aria-invalid={errors.data ? "true" : "false"} 
                            type='date'
                            placeholder="Дата начала"
                            />

                            <input className="search_form_data_input"
                            {...register("date", { required: true })} 
                            aria-invalid={errors.data ? "true" : "false"} 
                            type='date'
                            placeholder="Дата конца"
                            />
                        </div>
                        <div className="search_errors_form_string">
                            {errors.date?.type === 'required' && <div style={errorSearchFormStyle} role="alert">Обязательное поле</div>}
                        </div>
                    </div>

                    <button onClick={toResultPage} className="search_form_data_button" type="submit">Поиск</button>
                </div>
            </form>
        </>
    )
}

export default SearchForm