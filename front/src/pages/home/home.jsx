import React from "react";
import { Link } from "react-router-dom";


function Home (){
    return(
    <>
    <h2>홈</h2>

    <Link to="/boardlist" className="link"> 전체 게시판 </Link>
    </>

    )
}
export default Home;