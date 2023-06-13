import { useEffect, useState } from "react";
import api from "../../../axios/axios";
import "./index.scss";
import { Loader } from "../../loader/Loader";

const AccountInfo = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get('/api/v1/account/info')
        .then(response => {
            setItems(response.data.eventFiltersInfo);
            setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
        });
    }, [setItems]);

    return(
        <div className="account_info_container">
            {isLoading ? 
                <div className="account_loader_container">
                    <Loader />
                </div>
            :
                <>
                    <div className="header_account_info_text">Использовано компаний: <span>{items.usedCompanyCount}</span></div>
                    <div className="header_account_info_text">Лимит по компаниям: <span className="header_account_info_span">{items.companyLimit}</span></div>  
                </>
            }
        </div>
    )
}

export default AccountInfo;