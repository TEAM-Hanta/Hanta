import React from "react";
import { Link } from "react-router-dom";


function Home (){
    return(
    <>
    <div>
    <div>
    <h2 style={{fontWeight:"bold", fontSize:"30px", marginLeft:"20px"}}>홈</h2>
    <Link to="/boardlist" className="link"> 전체 게시판 </Link>
    </div>
    <img style={{ margin:"0 auto", width:"100%", height:"100%" }} alt="" src="img/발나온거2.png"/>
    </div>
    </>

    )
}
export default Home;