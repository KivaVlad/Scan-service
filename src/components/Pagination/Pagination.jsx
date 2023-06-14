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
            window.scrollTo(0, 0);
            setIsScrolling(true);
        } else {
            window.scrollTo(0, 0);
            setIsScrolling(false);
        }
    }

    return(
        <div className="pagination">
            {
                pageNumbers.map((number) => (
                    <div className="pagination_item" key={number}>
                        <button 
                            className="pagination_btn"
                            onClick={() => {
                                handleScroll();
                                paginate(number);
                            }} 
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