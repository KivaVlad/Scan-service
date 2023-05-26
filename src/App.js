import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import Result from "./pages/ResultPage/Result";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout isLogged={isLogged} setIsLogged={setIsLogged} />}>
          <Route index element={<HomePage isLogged={isLogged} />} />
          <Route path="/login" element={<LoginPage setIsLogged={setIsLogged}/>} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
