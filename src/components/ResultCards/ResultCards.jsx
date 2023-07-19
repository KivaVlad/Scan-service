import React from "react";
import { Link } from "react-router-dom";
import { getContent } from "./helper";
import "./resultCards.scss";

const ResultCards = ({ doc }) => {
    const {content: { markup }} = doc;
    const { bgUrl, content } = getContent(markup);

    return(
            <div className="documents_card">

                <div className="documents_card_header">
                    <div className="documents_card_date">{doc.issueDate.substr(0,10).split('-').reverse().join('-')}</div>
                    <div className="documents_card_sourse">{doc.source.name}</div>
                </div>

                <div className="documents_card_title">{doc.title.text.substr(0, 70)} ...</div>
                <div className="documents_card_tag">Технические новости</div>
                {Boolean(bgUrl) ?
                    <div className="documents_card_image" style={{ backgroundImage: `url(${bgUrl})` }}></div>
                    :
                    <div className="documents_card_image"></div>
                }
                <div className="documents_card_text" dangerouslySetInnerHTML={{ __html: content }} />

                <div className="documents_card_footer">
                    <Link target='_blank' to={doc.url} className="documents_card_button">Читать в источнике</Link>
                    <span className="documents_card_words">{doc.attributes.wordCount} слов(а)</span>
                </div>

            </div>
    )
}

export default ResultCards;