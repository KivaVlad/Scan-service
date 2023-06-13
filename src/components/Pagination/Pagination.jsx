import React, { useState } from "react";
import "./pagination.scss";

const Pagination = (props) => {
    const { documentsPerPage, totalDocuments, paginate} = props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalDocuments / documentsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = () => {
        if(!isScrolling) {
            setTimeout(() => {
                window.scrollTo(0, 0);
                setIsScrolling(true);
            }, 1000)
        } else {
            setTimeout(() => {
                window.scrollTo(0, 0);
                setIsScrolling(false);
            }, 1000)
        }
    }

    return(
        <div className="pagination">
            {
                pageNumbers.map((number) => (
                    <div className="page_item" key={number}>
                        <button 
                            onClick={() => {
                                handleScroll();
                                paginate(number);
                            }} 
                            className="page_btn"
                        >
                            {number}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Pagination;