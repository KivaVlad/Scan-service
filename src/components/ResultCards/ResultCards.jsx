import { Link } from "react-router-dom";
import "./resultCards.scss";

const ResultCards = (props) => {
    const {doc} = props;

    return(
            <div className="documents_card">
                <div className="documents_card_header">
                    <div className="documents_card_date">{doc.date}</div>
                    <Link to={doc.sourseLink} className="documents_card_sourse">{doc.source}</Link>
                </div>
                <div className="documents_card_title">{doc.title}</div>
                <div className="documents_card_tag">{doc.tag}</div>
                <div className="documents_card_image">
                    <img src={doc.img} alt="img"/>
                </div>
                <div className="documents_card_text">{doc.text}</div>
                <div className="documents_card_footer">
                    <Link to={doc.link} className="documents_card_button">Читать в источнике</Link>
                    <span className="documents_card_words">{doc.words}слов</span>
                </div>
            </div>
    )
}

export default ResultCards;