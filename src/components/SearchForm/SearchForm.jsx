import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../axios/axios";
import "./searchForm.scss";
import { useState } from "react";

const SearchForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
      histograms(data);
      objectSearch(data);
    }
    
    function histograms() {
        api
      .post("/api/v1/objectsearch/histograms", {
        issueDateInterval: {
          startDate: startDate,
          endDate: endDate,
        },
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                type: "company",
                sparkId: null,
                entityId: null,
                inn: inn,
                maxFullness: maxFullness,
                inBusinessNews: inBusinessNews,
              },
            ],
            onlyMainRole: onlyMainRole,
            tonality: tonality,
            onlyWithRiskFactors: onlyWithRiskFactors,
            riskFactors: {
              and: [],
              or: [],
              not: [],
            },
            themes: {
              and: [],
              or: [],
              not: [],
            },
          },
          themesFilter: {
            and: [],
            or: [],
            not: [],
          },
        },
        searchArea: {
          includedSources: [],
          excludedSources: [],
          includedSourceGroups: [],
          excludedSourceGroups: [],
        },
        attributeFilters: {
          excludeTechNews: isTechNews,
          excludeAnnouncements: isAnnouncement,
          excludeDigests: isDigest,
        },
        similarMode: "duplicates",
        limit: limit,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    function objectSearch() {
        api
      .post("/api/v1/objectsearch", {
        issueDateInterval: {
          startDate: startDate,
          endDate: endDate,
        },
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                type: "company",
                sparkId: null,
                entityId: null,
                inn: inn,
                maxFullness: maxFullness,
                inBusinessNews: inBusinessNews,
              },
            ],
            onlyMainRole: onlyMainRole,
            tonality: tonality,
            onlyWithRiskFactors: onlyWithRiskFactors,
            riskFactors: {
              and: [],
              or: [],
              not: [],
            },
            themes: {
              and: [],
              or: [],
              not: [],
            },
          },
          themesFilter: {
            and: [],
            or: [],
            not: [],
          },
        },
        searchArea: {
          includedSources: [],
          excludedSources: [],
          includedSourceGroups: [],
          excludedSourceGroups: [],
        },
        attributeFilters: {
          excludeTechNews: isTechNews,
          excludeAnnouncements: isAnnouncement,
          excludeDigests: isDigest,
        },
        similarMode: "duplicates",
        limit: limit,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    
    const [inn, setInn] = useState('');
    const [tonality, setTonality] = useState("any");
    const [limit, setLimit] = useState('');
    const [maxFullness, setMaxFullness] = useState(true);
    const [onlyMainRole, setOnlyMainRole] = useState(true);
    const [inBusinessNews, setInBusinessNews] = useState(true);
    const [onlyWithRiskFactors, setOnlyWithRiskFactors] = useState(false);
    const [isTechNews, setTechNews] = useState(false);
    const [isAnnouncement, setAnnouncement] = useState(true);
    const [isDigest, setDigest] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

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

                        <h3 className='search_form_text'>ИНН компании* 7710137066</h3>
                        <input className="search_form_input"
                            {...register("inn",{ required: true, minLength: 10, maxLength: 10, value: inn })} 
                            aria-invalid={errors.inn ? "true" : "false"} 
                            type='number'
                            placeholder="10 цифр"
                        />
                        <div className='search_errors_form_string'>
                            {errors.inn?.type === 'required' && <div style={errorSearchFormStyle} role="alert">Введите корректные данные</div>}
                            {errors.inn?.type === 'minLength' && <div style={errorSearchFormStyle} role="alert">Введите корректные данные</div>}
                            {errors.inn?.type === 'maxLength' && <div style={errorSearchFormStyle} role="alert">Введите корректные данные</div>}
                        </div>

                        <h3 className='search_form_text'>Тональность</h3>
                        <select className="search_form_input"
                            {...register("tonality", {value: tonality})}>
                            <option value="any">Любая</option>
                            <option value="positive">Позитивная</option>
                            <option value="negative">Негативная</option>
                        </select>
                        <div className='search_errors_form_string'></div>

                        <h3 className='search_form_text'>Количество документов в выдаче*</h3>
                        <input className="search_form_input"
                            {...register("limit", { required: true, minLength: 1, maxLength: 1000, value: limit })} 
                            aria-invalid={errors.limit ? "true" : "false"} 
                            type='number'
                            placeholder="От 1 до 1000"
                        />
                        <div className='search_errors_form_string'>
                            {errors.limit?.type === 'required' && <div style={errorSearchFormStyle} role="alert">Обязательное поле</div>}
                            {errors.limit?.type === 'minLength' && <div style={errorSearchFormStyle} role="alert">Обязательное поле</div>}
                            {errors.limit?.type === 'maxLength' && <div style={errorSearchFormStyle} role="alert">Обязательное поле</div>}
                        </div>

                        <h3 className='search_form_text'>Диапазон поиска*</h3>

                    </div>

                    <div className="search_wrapper_checkboxs">
                        <div className="search_checkbox_box"><input type="checkbox" {...register("maxFullness", {value: maxFullness})}/><label className="search_checkbox_text">Признак максимальной полноты</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" {...register("inBusinessNews", {value: inBusinessNews})}/><label className="search_checkbox_text">Упоминания в бизнес-контексте</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" {...register("onlyMainRole", {value: onlyMainRole})}/><label className="search_checkbox_text">Главная роль в публикации</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" {...register("onlyWithRiskFactors", {value: onlyWithRiskFactors})}/><label className="search_checkbox_text">Публикации только с риск-факторами</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" {...register("includeTechNews", {value: isTechNews})}/><label className="search_checkbox_text">Включать технические новости рынков</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" {...register("includeAnnouncements", {value: isAnnouncement})}/><label className="search_checkbox_text">Включать анонсы и календари</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" {...register("includeDigests", {value: isDigest})}/><label className="search_checkbox_text">Включать сводки новостей</label></div>
                    </div>
                </div>

                <div className="search_data_container">
                    <div>
                        <div className="search_data_container_inputs">
                            <input className="search_form_data_input"
                                {...register("startDate", { required: true, value: startDate })} 
                                aria-invalid={errors.startDate ? "true" : "false"} 
                                type='date'
                                placeholder="Дата начала"
                            />

                            <input className="search_form_data_input"
                                {...register("endDate", { required: true, value: endDate })} 
                                aria-invalid={errors.endDate ? "true" : "false"} 
                                type='date'
                                placeholder="Дата конца"
                            />
                        </div>
                        <div className="search_errors_form_string">
                            {errors.startDate?.type === 'required' && <div style={errorSearchFormStyle} role="alert">Обязательное поле</div>}
                        </div>
                    </div>

                    <button className="search_form_data_button" type="submit">Поиск</button>
                </div>
            </form>
        </>
    )
}

export default SearchForm