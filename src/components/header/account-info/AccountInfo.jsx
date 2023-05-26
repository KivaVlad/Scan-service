import { useEffect, useState } from "react";
import api from "../../../axios/axios";
import "./index.scss";

const AccountInfo = () => {
    const [companys, setCompanys] = useState({});

    useEffect(() => {
        api.get('/api/v1/account/info')
        .then((response) => {
            setCompanys(response.data.eventFiltersInfo);
            console.log(response.data.eventFiltersInfo);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return(
        <div className="account_info_container">
            <div className="header_account_info_text">Использовано компаний</div>
            <div className="header_account_info_text">Лимит по компаниям</div>
            
        </div>
    )
}

export default AccountInfo;