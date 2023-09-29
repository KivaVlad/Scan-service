import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./components/Layout/Layout";
const HomePage = lazy(() => import("./pages/HomePage/Home"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const Result = lazy(() => import("./pages/ResultPage/Result"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));


function App() {
  const [totalDocs, setTotalDocs] = useState([]);
  const [riskFactors, setRiskFactors] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const expireToken = new Date(localStorage.getItem("expire"));
    const nowDate = new Date();

    if(expireToken > nowDate) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [setIsLogged]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout isLogged={isLogged} setIsLogged={setIsLogged} />}>
          <Route index element={<HomePage isLogged={isLogged} />} />
          <Route path="/login" element={<LoginPage setIsLogged={setIsLogged} />} />
          <Route path="/search" element={<SearchPage setTotalDocs={setTotalDocs} setRiskFactors={setRiskFactors} setDocuments={setDocuments} />}/>
          <Route path="/result" element={<Result totalDocs={totalDocs} riskFactors={riskFactors} documents={documents} setTotalDocs={setTotalDocs} setRiskFactors={setRiskFactors} setDocuments={setDocuments} />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
