import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import License from "./pages/license";
import Mypage from "./pages/mypage";
import Notice from "./pages/notice";
import Write from "./pages/write";
import Letter from "./pages/letter";
import Modal from "./pages/modal";

const App = () => {
  return (
      <Routes> 
        <Route path="/" element={
           <img style={{paddingLeft:"41%", paddingTop:"13%"}} alt="bg" src="img/bg.png" />
        } />
        <Route path="/home" element={<Home/>} />
        <Route path="/license" element={<License/>} />
        <Route path="/notice" element={<Notice/>} />
        <Route path="/mypage" element={<Mypage/>} />
        <Route path="/write" element={<Write/>} />
        <Route path="/*" element={
          <div style={{fontSize:"50px", textAlign:"center"}}>잘못된 접근입니다.</div>
        } />
        <Route path="/letter" element={<Letter/>} />
      </Routes> 
  );
}

export default App;

