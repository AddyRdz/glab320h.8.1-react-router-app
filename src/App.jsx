import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Navigation from "./components/navigation";
import "./App.css";


function App() {
  // console.log(import.meta.env.VITE_API_KEY)
  return (
    <>
    <div className="app">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
