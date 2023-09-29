import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./searchPage.scss";

import searchImg from "../../assets/images/search_group.png";
import folders from "../../assets/images/Folders.png";
import documentImg from "../../assets/images/Document.png";

const SearchPage = (props) => {

    return(
        <section className="search_section">
            <div className="container">
                <div className="search_content">
                    <div className="search_content_text">
                        <h1 className="title search_title">Найдите необходимые <br/>данные в пару кликов</h1>
                        <p className="search_content_subtext">Задайте параметры поиска. <br/>Чем больше заполните, тем точнее поиск</p>
                        <div className="search_form_container">
                            <SearchForm {...props}/>
                        </div>
                    </div>

                    <div className="search_content_images">
                        <div className="search_content_images_top">
                            <img className="search_content_images_top_doc" src={documentImg} alt="" />
                            <img className="search_content_images_top_folders" src={folders} alt="" />
                        </div>

                        <div className="search_content_images_bottom">
                            <img className="search_content_images_bottom_ch" src={searchImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchPage