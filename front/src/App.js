import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import License from "./pages/license";
import Mypage from "./pages/mypage";
import Notice from "./pages/notice";
import Write from "./pages/write";


const App = () => {
  return (
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/license" element={<License/>} />
        <Route path="/notice" element={<Notice/>} />
        <Route path="/mypage" element={<Mypage/>} />
        <Route path="/write" element={<Write/>} />
      </Routes> 
  );
}

export default App;

