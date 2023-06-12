import React from "react";
import { useEffect } from "react";
import "./result.scss";
import resultImage from "../../assets/images/result-image-hero.png";
import ResultSlider from "../../components/ResultSlider/ResultSlider";
import ResultCards from "../../components/ResultCards/ResultCards";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/loader/Loader";


const Result = (props) => {
    const {totalDocs, riskFactors, documents, setTotalDocs, setRiskFactors, setDocuments} = props;
    const docsInStorage = JSON.parse(localStorage.getItem('documents'));

    useEffect(() => {
        if(docsInStorage !== null) {
            setDocuments(docsInStorage);
        } else {
          setDocuments();
        }
    },[]);
    
    const navigate = useNavigate();
    function toSearchPage() {
        navigate("/search");
    }

    return(
        <>
            <div className="container">
                <div className="result_header">
                    <div className="result_header_text">
                        <h1 className="title result_title">Ищем. Скоро будут результаты</h1>
                        <p className="result_subtitle">Поиск может занять некоторое время, просим сохранять терпение.</p>
                    </div>
                    <div className="result_hero_img">
                        <img className="result_img" src={resultImage} alt="img"/>
                    </div>
                </div>
                <div className="result_main">
                    <div className="title list_title">Общая сводка</div>
                    <span className="list_subtitle">Найдено  {docsInStorage !== null ? documents.length : ""} вариантов</span>
                    <div className="result_data_slider">
                        <ResultSlider totalDocs={totalDocs} riskFactors={riskFactors} setTotalDocs={setTotalDocs} setRiskFactors={setRiskFactors} />
                    </div>
                    <h1 className="title list_title">Список документов</h1>

                    {docsInStorage !== null && documents.length > 0
                      ?
                        <>
                        <div className="documents_results_container">
                            {documents.map((doc) => {
                                return(
                                    <ResultCards key={doc.ok.id} doc={doc.ok}/>
                                )
                            })}
                        </div>
                        
                        {docsInStorage !== null && documents.length > 10 ?
                            <div className="rusults_main_btn">
                                <button className="results_button">Показать больше</button>
                            </div>
                            : <></>
                        }
                        </>
                      :
                        <div className="documents_none_results_container">
                            <Loader />
                            <h2 className="title documents_none_results_title">Загружаю данные ...</h2>
                        </div> 
                    }
                </div>
            </div>
        </>
    )
}

export default Result;