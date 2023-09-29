import React, { useState, useEffect, lazy, Suspense } from "react";
import "./result.scss";
import resultImage from "../../assets/images/result-image-hero.png";
import ResultSlider from "../../components/ResultSlider/ResultSlider";
import { Loader } from "../../components/loader/Loader";
import Pagination from "../../components/Pagination/Pagination";

const ResultsDocuments = lazy(() => import('../../components/ResultsDocuments/ResultsDocuments'));


const Result = (props) => {
    const {totalDocs, riskFactors, documents, setTotalDocs, setRiskFactors, setDocuments} = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [documentsPerPage] = useState(10);
    const lastDocIndex = currentPage * documentsPerPage;
    const firstDocIndex = lastDocIndex - documentsPerPage;
    const currentDoc = documents.slice(firstDocIndex, lastDocIndex);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        if(localStorage.getItem('documents') !== null) {
            setDocuments(JSON.parse(localStorage.getItem('documents')));
        }
    }, [setDocuments]);

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
                    <span className="list_subtitle">Найдено  {documents?.length} вариантов</span>

                    <div className="result_data_slider">
                        <ResultSlider totalDocs={totalDocs} riskFactors={riskFactors} setTotalDocs={setTotalDocs} setRiskFactors={setRiskFactors} />
                    </div>

                    <h1 className="title list_title">Список документов</h1>

                    {documents?.length > 0 &&
                        <>
                            <div className="documents_results_container">
                                <Suspense fallback={<div className="lazy_container"><Loader /></div>}>
                                    <ResultsDocuments documents={currentDoc} />
                                </Suspense>
                            </div>

                            <Pagination documentsPerPage={documentsPerPage} totalDocuments={documents.length} paginate={paginate} />
                        </>
                    }
                     
                </div>

            </div>
        </>
    )
}

export default Result;