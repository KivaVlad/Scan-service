import React from "react";
import { useRef } from "react";
import { Loader } from "../loader/Loader";

import "./resultSlider.scss";
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

    const dataInfo = [
        {
            "id": "1",
            "period": "01.09.2022",
            "total": "5",
            "risks": "0"
        },
        {
            "id": "2",
            "period": "13.09.2022",
            "total": "2",
            "risks": "0"
        },
        {
            "id": "3",
            "period": "15.09.2022",
            "total": "6",
            "risks": "0"
        },
        {
            "id": "4",
            "period": "23.09.2022",
            "total": "8",
            "risks": "2"
        },
        {
            "id": "5",
            "period": "02.10.2022",
            "total": "1",
            "risks": "0"
        },
        {
            "id": "6",
            "period": "15.10.2022",
            "total": "10",
            "risks": "2"
        },
        {
            "id": "7",
            "period": "19.10.2022",
            "total": "4",
            "risks": "0"
        },
        {
            "id": "8",
            "period": "22.10.2022",
            "total": "3",
            "risks": "0"
        },
        {
            "id": "9",
            "period": "27.09.2022",
            "total": "5",
            "risks": "0"
        },
        {
            "id": "10",
            "period": "03.11.2022",
            "total": "2",
            "risks": "0"
        },
        {
            "id": "11",
            "period": "09.11.2022",
            "total": "6",
            "risks": "0"
        },
        {
            "id": "12",
            "period": "13.11.2022",
            "total": "8",
            "risks": "2"
        },
        {
            "id": "13",
            "period": "15.11.2022",
            "total": "1",
            "risks": "0"
        },
        {
            "id": "14",
            "period": "20.11.2022",
            "total": "10",
            "risks": "2"
        },
        {
            "id": "15",
            "period": "26.11.2022",
            "total": "4",
            "risks": "0"
        },
        {
            "id": "16",
            "period": "27.11.2022",
            "total": "3",
            "risks": "0"
        }
    ]

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