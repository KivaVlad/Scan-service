import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { Loader } from "../loader/Loader";

const Footer = lazy(() => import("../footer/Footer"));


const Layout = (props) => {

    return(
        <>
            <Header {...props}/>

            <Suspense fallback={<div className="lazy_container"><Loader /></div>}>
                <Outlet />
                
                <footer className="footer">
                    <Footer />
                </footer>
            </Suspense>
                
        </>
    )
}

export default Layout