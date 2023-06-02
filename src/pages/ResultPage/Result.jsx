import "./result.scss";
import resultImage from "../../assets/images/result-image-hero.png";

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
                    <h1 className="title result_title">Список документов</h1>
                    <div className="result_main_container">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result;