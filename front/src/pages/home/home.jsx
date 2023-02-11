import React from "react";
import { Link } from "react-router-dom";




function Home (){
    console.log(localStorage);
    return(
    <>
    <div>
    <div>
    <h2 style={{fontSize:"50px", fontWeight:"bold", textAlign:"center", color:"darkorange", marginLeft:"20px"}}>한아전 에브리타임 <img style={{width:"40px", height:"40px"}} alt="bg" src="img/jolla.png"/></h2>
    
    <div style={{margin:"0 auto", display:"block", borderTop:"3px solid gray",borderBottom:"3px solid gray", width:"400px"}}>
    <Link style={{margin:"35px", fontSize:"25px"}} to="/boardlist" className="link">전체</Link>
    <Link style={{margin:"35px", fontSize:"25px"}} to="/boardlist" className="link">유머</Link>
    <Link style={{margin:"35px", fontSize:"25px"}} to="/boardlist" className="link">익명</Link>
    <Link style={{margin:"35px", fontSize:"25px"}} to="/boardlist" className="link">뒷담</Link>
    </div>

    </div>
    <br/>
    <img style={{margin:"auto", display:"block",width:"350px", height:"160px"}} alt="" src="img/final.png"/>

    <br/>
    <div style={{margin:"0 auto", display:"block", border:"2px solid gray", width:"400px"}}></div>
    <br/>

    <div style={{width:"350px", height:"100px", border:"2px solid gray", backgroundColor:"#e9ecef",
                margin:"0 auto", display:"block", borderRadius:"30px"}}>
    </div>

    <br/>

    <div style={{width:"350px", height:"100px", border:"2px solid gray", backgroundColor:"#e9ecef",
                margin:"0 auto", display:"block", borderRadius:"30px"}}>
    </div>

    </div>
    </>

    )
}   
export default Home;