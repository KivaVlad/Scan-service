import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Loader } from "../loader/Loader";

const Layout = (props) => {
    const {isLogged, setIsLogged} = props;

    return(
        <>
            <Header isLogged={isLogged} setIsLogged={setIsLogged}/>

                <main className="container">
                    <Suspense fallback={<div className="lazy_container"><Loader /></div>}>
                        <Outlet />
                    </Suspense>
                </main>
                
            <Footer />
        </>
    )
}

export default Layout