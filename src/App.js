import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import Result from "./pages/ResultPage/Result";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("token") || localStorage.getItem("expire") !== null) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [setIsLogged]);

  const [totalDocs, setTotalDocs] = useState([]);
  const [riskFactors, setRiskFactors] = useState([]);
  const [documents, setDocuments] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout isLogged={isLogged} setIsLogged={setIsLogged} />}>
          <Route index element={<HomePage isLogged={isLogged} />} />
          <Route path="/login" element={<LoginPage setIsLogged={setIsLogged} />} />
          <Route path="/search" element={<SearchPage setTotalDocs={setTotalDocs} setRiskFactors={setRiskFactors} setDocuments={setDocuments}/>}/>
          <Route path="/result" element={<Result totalDocs={totalDocs} riskFactors={riskFactors} documents={documents}/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
