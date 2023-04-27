import React from "react";
import css from "./NotFound.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {

    return(
        <>
            <div className="container">
                <div className="notfound_content">
                    <h1 className="title notfound_title">Страница не найдена</h1>
                    <Link to="/" className="notfound_button">На главную</Link>
                </div>
            </div>
        </>
    )
}

export default NotFoundPage