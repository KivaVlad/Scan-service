import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { Loader } from "../loader/Loader";

const Footer = lazy(() => import("../footer/Footer"));


const Layout = (props) => {
    const {isLogged, setIsLogged} = props;

    return(
        <>
            <header>
                <Header isLogged={isLogged} setIsLogged={setIsLogged}/>
            </header>

            <main>
                <Suspense fallback={<div className="lazy_container"><Loader /></div>}>
                    <Outlet />
                </Suspense>
            </main>
                
            <footer>
                <Suspense fallback={<div className="lazy_container"><Loader /></div>}>
                    <Footer />
                </Suspense>
            </footer>
        </>
    )
}

export default Layout