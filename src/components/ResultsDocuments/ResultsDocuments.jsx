import React from "react";
import "../../pages/ResultPage/result.scss";
import ResultCards from "../ResultCards/ResultCards";

const ResultsDocuments = (props) => {
    const {documents} = props;

    return(
        <>
            {documents.map((doc) => {
                return(
                    <ResultCards key={doc.ok.id} doc={doc.ok}/>
                )
            })}
        </>
    )
}

export default ResultsDocuments;