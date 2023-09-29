import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../axios/axios";
import ButtonLoader from "../ButtonLoader/ButtonLoader";
import "./searchForm.scss";


const SearchForm = (props) => {
    const {setTotalDocs, setRiskFactors, setDocuments} = props;
    const [isLoading, setIsLoading] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
      setIsLoading(true);
      histograms(data);
      objectSearch(data);
    }
    
    async function histograms(data) {
      await api.post("/api/v1/objectsearch/histograms", {
        issueDateInterval: {
          startDate: data.startDate,
          endDate: data.endDate,
        },
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                type: "company",
                sparkId: null,
                entityId: null,
                inn: data.inn,
                maxFullness: data.maxFullness,
                inBusinessNews: data.inBusinessNews,
              },
            ],
            onlyMainRole: data.onlyMainRole,
            tonality: data.tonality,
            onlyWithRiskFactors: data.onlyWithRiskFactors,
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
          excludeTechNews: data.isTechNews,
          excludeAnnouncements: data.isAnnouncement,
          excludeDigests: data.isDigest,
        },
        similarMode: "duplicates",
        limit: data.limit,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
      })
      .then((res) => {
        setTotalDocs(res.data.data[0].data);
        setRiskFactors(res.data.data[1].data);
        localStorage.setItem('totalDocs', JSON.stringify(res.data.data[0].data));
        localStorage.setItem('riskFactors', JSON.stringify(res.data.data[1].data));
      })
      .then(() => {
        
      })
      .catch((error) => {
        console.log(error);
        alert('Что-то пошло не так. Попробуйте еще раз');
        setIsLoading(false);
      });
    }


    async function objectSearch(data) {
      await  api.post("/api/v1/objectsearch", {
        issueDateInterval: {
          startDate: data.startDate,
          endDate: data.endDate,
        },
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                type: "company",
                sparkId: null,
                entityId: null,
                inn: data.inn,
                maxFullness: data.maxFullness,
                inBusinessNews: data.inBusinessNews,
              },
            ],
            onlyMainRole: data.onlyMainRole,
            tonality: data.tonality,
            onlyWithRiskFactors: data.onlyWithRiskFactors,
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
          excludeTechNews: data.isTechNews,
          excludeAnnouncements: data.isAnnouncement,
          excludeDigests: data.isDigest,
        },
        similarMode: "duplicates",
        limit: data.limit,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
      })
      .then((response) => {
        documents(response.data.items.map(id => id.encodedId));
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
    }


    async function documents(ids) {
      await 
      api.post('/api/v1/documents', {
        ids: ids
      })
      .then((response) => {
        setDocuments(response.data);
        localStorage.setItem('documents', JSON.stringify(response.data));
        setIsLoading(false);
        toResultPage();
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
    }

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
                            {...register("inn",{ required: true, minLength: 10, maxLength: 10 })} 
                            aria-invalid={errors.inn ? "true" : "false"} 
                            type='number'
                            autoComplete="off"
                            placeholder="10 цифр"
                        />
                        <div className='search_errors_form_string'>
                            {errors.inn?.type === 'required' && <div style={errorSearchFormStyle} role="alert">Введите корректные данные</div>}
                            {errors.inn?.type === 'minLength' && <div style={errorSearchFormStyle} role="alert">Введите корректные данные</div>}
                            {errors.inn?.type === 'maxLength' && <div style={errorSearchFormStyle} role="alert">Введите корректные данные</div>}
                        </div>

                        <h3 className='search_form_text'>Тональность</h3>
                        <select className="search_form_input"
                            {...register("tonality")}>
                            <option value="any">Любая</option>
                            <option value="positive">Позитивная</option>
                            <option value="negative">Негативная</option>
                        </select>
                        <div className='search_errors_form_string'></div>

                        <h3 className='search_form_text'>Количество документов в выдаче*</h3>
                        <input className="search_form_input"
                            {...register("limit", { required: true, minLength: 1, maxLength: 1000 })} 
                            aria-invalid={errors.limit ? "true" : "false"} 
                            type='number'
                            autoComplete="off"
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
                        <div className="search_checkbox_box"><input type="checkbox" checked={true} {...register("maxFullness")}/><label className="search_checkbox_text">Признак максимальной полноты</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" checked={true} {...register("inBusinessNews")}/><label className="search_checkbox_text">Упоминания в бизнес-контексте</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" checked={true} {...register("onlyMainRole")}/><label className="search_checkbox_text">Главная роль в публикации</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" {...register("onlyWithRiskFactors")}/><label className="search_checkbox_text">Публикации только с риск-факторами</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" {...register("includeTechNews")}/><label className="search_checkbox_text">Включать технические новости рынков</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" checked={true} {...register("includeAnnouncements")}/><label className="search_checkbox_text">Включать анонсы и календари</label></div>
                        <div className="search_checkbox_box"><input type="checkbox" {...register("includeDigests")}/><label className="search_checkbox_text">Включать сводки новостей</label></div>
                    </div>
                </div>

                <div className="search_data_container">
                    <div>
                        <div className="search_data_container_inputs">
                            <input className="search_form_data_input"
                                {...register("startDate", { required: true })} 
                                aria-invalid={errors.startDate ? "true" : "false"} 
                                type='date'
                                placeholder="Дата начала"
                            />

                            <input className="search_form_data_input"
                                {...register("endDate", { required: true })} 
                                aria-invalid={errors.endDate ? "true" : "false"} 
                                type='date'
                                placeholder="Дата конца"
                            />
                        </div>
                        <div className="search_errors_form_string">
                            {errors.startDate?.type === 'required' && <div style={errorSearchFormStyle} role="alert">Обязательное поле</div>}
                        </div>
                    </div>

                    <button className="search_form_data_button" type="submit">{isLoading ? (<ButtonLoader />) : "Поиск"}</button>
                </div>
            </form>
        </>
    )
}

export default SearchForm