import React, { lazy, Suspense } from "react";
import "../../pages/ResultPage/result.scss";

const ResultCards = lazy(() => import("../ResultCards/ResultCards"))


const ResultsDocuments = (props) => {
    const {documents} = props;

    return(
        <>
            <Suspense fallback={<div>...</div>}>
                <>
                    {documents.map((doc) => {
                        return(
                            <ResultCards key={doc.ok.id} doc={doc.ok}/>
                        )
                    })}
                </>
            </Suspense>
        </>
    )
}

export default ResultsDocuments;