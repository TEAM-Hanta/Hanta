import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import License from "./pages/license";
import Mypage from "./pages/mypage";
import Notice from "./pages/notice";
import Write from "./pages/write";
import Letter from "./pages/letter";
import Login from "./pages/user/login";
import Signup from "./pages/user/signup";

const App = () => {
  return (
      <Routes> 
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
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

// /home은 /로 이전시키고 홈페이지 이외의 페이지에서 접속시 미 로그인시 로그인창 띄우기
