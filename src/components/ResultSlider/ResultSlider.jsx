import { useRef } from "react";
import "./resultSlider.scss";
import dataInfo from "../../json/dataInfo.json";
import arrowLeft from "../carousel/items/arrow-left.png";
import arrowRight from "../carousel/items/arrow-right.png";

const ResultSlider = () => {

    const slider = useRef(null);
    let position = 0;

    const prevHandler = () => {
        position += 150
        slider.current.childNodes.forEach((element) => {
            element.style = `transform: translateX(${position}px)`
        })
    }

    const nextHandler = () => {
        position -= 150
        slider.current.childNodes.forEach((element) => {
            element.style = `transform: translateX(${position}px)`
        })
    }

    return(
        <div className="slider_section">
            <button onClick={prevHandler} className="slider_section_button"><img src={arrowLeft} alt="prev"/></button>
            <div className="slider_container">
                <div className="slider_container_info">
                    <span className="slider_container_info_text">Период</span>
                    <span className="slider_container_info_text">Всего</span>
                    <span className="slider_container_info_text">Риски</span>
                </div>
                <div ref={slider} className="slider_wrapper">
                    {dataInfo.map((data) => {
                        return(
                            <div className="slider_res_content" key={data.id}>
                                <div className="slider_res_content_text">{data.period}</div>
                                <div className="slider_res_content_text">{data.total}</div>
                                <div className="slider_res_content_text">{data.risks}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <button onClick={nextHandler} className="slider_section_button"><img src={arrowRight} alt="next"/></button>
        </div>
    )
}

export default ResultSlider;