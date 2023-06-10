import React from "react";
import { useRef } from "react";
import { Loader } from "../loader/Loader";

import "./resultSlider.scss";
import arrowLeft from "../carousel/items/arrow-left.png";
import arrowRight from "../carousel/items/arrow-right.png";

const ResultSlider = (props) => {
    const {dataInfo} = props;

    const myData = JSON.parse(localStorage.getItem('histogram'));

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


    if (dataInfo.length > 0) {
    return(
            <div className="slider_section">
                <button onClick={prevHandler} className="slider_section_button"><img src={arrowLeft}/></button>
                <div className="slider_container">
                    <div className="slider_container_info">
                        <span className="slider_container_info_text">Период</span>
                        <span className="slider_container_info_text">Всего</span>
                        <span className="slider_container_info_text">Риски</span>
                    </div>
                    <div ref={slider} className="slider_wrapper">
                        {dataInfo.map((element, id) => {
                            return(
                                <div className="slider_res_content" key={id}>
                                    <div className="slider_res_content_text">{element.data[0].date.substr(0,10)}</div>
                                    <div className="slider_res_content_text">{element.data[0].value}</div>
                                    <div className="slider_res_content_text">{element.data[1].value}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <button onClick={nextHandler} className="slider_section_button"><img src={arrowRight}/></button>
            </div>
        )
    } else {
        return (
            <div className="slider_section">
            <button onClick={prevHandler} className="slider_section_button"><img src={arrowLeft}/></button>
            <div className="slider_container">
                <div className="slider_container_info">
                    <span className="slider_container_info_text">Период</span>
                    <span className="slider_container_info_text">Всего</span>
                    <span className="slider_container_info_text">Риски</span>
                </div>
                <div className="loader_wrapper">
                    <Loader /> <h2 className="slider_loader_text">Загружаем данные...</h2>
                </div>
            </div>
            <button onClick={nextHandler} className="slider_section_button"><img src={arrowRight}/></button>
        </div>
        )
    }
}

export default ResultSlider;