import React , { useState , useEffect  } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//홈페이지 이하 
import Home from "./pages/home/home"; //홈페이지
import Board from "./pages/home/boardlist"; //개별게시판
import Detail from "./pages/home/detailpost";  //상세 게시물
//자격증 이하
import License from "./pages/license/license"; //자격증
//마이페이지 이하
import Mypage from "./pages/mypage/mypage";  //마이페이지
//알림페이지 이하
import Notice from "./pages/notice/notice"; //알리페이지
//글쓰기페이지 이하
import Write from "./pages/write/write"; //글쓰기
//유저 페이지 이하
import Login from "./user/login"; //로그인
import Signup from "./user/signup"; //회원가입

import BottomNav from "./BottomNav";

import { RecoilRoot } from "recoil";

//토큰영역
import { useRecoilState } from 'recoil';
import { tokenState } from "./token/GlobalState";

const App = () => {

  // const dispatch = useDispatch();
  // const token = useSelector(state => state.token);

  const [token, setToken]  = useRecoilState(tokenState);

  
  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   if (storedToken && storedToken !== hello) {
  //     setHello(storedToken);
  //   }
  // }, [hello]);

  // useEffect(() => {
  //   localStorage.setItem("token", hello);
  // }, [hello]);
  
  return (
    <RecoilRoot>
    <div className="App">
      {
         token == null ? 
        <>
        <BottomNav /> 
        <Routes> 
        <Route path="/home" element={<Home/>} />
        <Route path="/boardlist" element={<Board/>} />
        <Route path="/" element={<Login/>} />     {/* 추후 home주소로 등록시키고 미 로그인시 접근할때 로그인창이 뜨도록 하기 */}
        <Route path="/signup" element={<Signup/>} />    
        <Route path="/license" element={<License/>} />
        <Route path="/notice" element={<Notice/>} />
        <Route path="/mypage" element={<Mypage/>} />
        <Route path="/write" element={<Write/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/*" element={
          <div style={{fontSize:"50px", textAlign:"center"}}>잘못된 접근입니다.</div>
        } />
      </Routes> 
        </>
        : <> <Login/> test</>
      }
      </div>
      </RecoilRoot>
  );
}

export default App;

// /home은 /로 이전시키고 홈페이지 이외의 페이지에서 접속시 미 로그인시 로그인창 띄우기
