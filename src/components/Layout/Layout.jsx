import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import { set } from "react-hook-form";

const Layout = (props) => {
    const {isLogged, setIsLogged} = props;

    return(
        <>
            <header>
                <Header isLogged={isLogged} setIsLogged={setIsLogged}/>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout