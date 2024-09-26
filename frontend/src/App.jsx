import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ResultPage from "./components/ResultPage";
import NewExpertPage from "./components/NewExpertPage";
import Experts from "./components/Experts";
import { Routes, Route, Link, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-screen text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resultPage" element={<ResultPage />} />
        <Route path="/newExpertPage" element={<NewExpertPage />} />
        <Route path="/experts" element={<Experts />} />
      </Routes>
    </div>
  );
}

export default App;
