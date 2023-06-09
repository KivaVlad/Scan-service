import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = (props) => {
    const {isLogged, setIsLogged} = props;

    return(
        <>
            <Header isLogged={isLogged} setIsLogged={setIsLogged}/>
                <Outlet />
            <Footer />
        </>
    )
}

export default Layout