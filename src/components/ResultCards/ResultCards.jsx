import React from "react";
import { Link } from "react-router-dom";
import "./resultCards.scss";

const ResultCards = (props) => {
    const {doc} = props;

    return(
            <div className="documents_card">
                <div className="documents_card_header">
                    <div className="documents_card_date">{doc.ok.issueDate.substr(0,10)}</div>
                    <div className="documents_card_sourse">{doc.ok.source.name}</div>
                </div>
                <div className="documents_card_title">{doc.ok.title.text.substr(0, 70)} ...</div>
                <div className="documents_card_tag">Технические новости</div>
                <div className="documents_card_image">
                    <img src={doc.ok.img} alt="img"/>
                </div>
                <div className="documents_card_text">{doc.ok.content.markup.substr(0, 500)} ...</div>
                <div className="documents_card_footer">
                    <Link target='_blank' to={doc.ok.url} className="documents_card_button">Читать в источнике</Link>
                    <span className="documents_card_words">{doc.ok.attributes.wordCount} слов</span>
                </div>
            </div>
    )
}

export default ResultCards;