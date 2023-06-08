import documents from "../../json/documents.json";
import "./result.scss";
import resultImage from "../../assets/images/result-image-hero.png";
import ResultSlider from "../../components/ResultSlider/ResultSlider";
import ResultCards from "../../components/ResultCards/ResultCards";

const Result = () => {

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
                    <span className="list_subtitle">Найдено 4 221 вариантов</span>
                    <div className="result_data_slider">
                        <ResultSlider />
                    </div>
                    <h1 className="title list_title">Список документов</h1>
                    <div className="documents_results_container">
                        {documents.map((doc) => {
                            return(
                                <ResultCards key={doc.id} doc={doc}/>
                            )
                        })}
                    </div>
                    <div className="rusults_main_btn">
                        <button className="results_button">Показать больше</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result;