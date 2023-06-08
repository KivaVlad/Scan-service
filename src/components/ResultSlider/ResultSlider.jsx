import { useEffect, useRef } from "react";
import "./resultSlider.scss";
import arrowLeft from "../carousel/items/arrow-left.png";
import arrowRight from "../carousel/items/arrow-right.png";

const ResultSlider = (props) => {
    const {dataInfo, setDataInfo} = props;

    useEffect(() => {
        console.log(dataInfo);

    }, [dataInfo]);

    const slider = useRef(null);
    let position = 0;

    const prevHandler = () => {
        position += 300
        slider.current.childNodes.forEach((element) => {
            element.style = `transform: translateX(${position}px)`
        })
    }

    const nextHandler = () => {
        position -= 300
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
                    <div className="slider_res_content">
                        <div className="slider_res_content_text">2023</div>
                        <div className="slider_res_content_text">5</div>
                        <div className="slider_res_content_text">0</div>
                    </div>
                </div>
            </div>
            <button onClick={nextHandler} className="slider_section_button"><img src={arrowRight} alt="next"/></button>
        </div>
    )
}

export default ResultSlider;