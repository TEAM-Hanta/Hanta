import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Count from "./count";
import "../css/home.css"
import { Link } from "react-router-dom";

function List() {
    return (
        <>
        <div style={{paddingLeft:"15%", paddingRight:"15%"}} className="list">
            <br></br>
        <h4><FontAwesomeIcon icon="user" />익명</h4>
        <Link to="/letter" style={{textDecoration:"none", color:"black", marginLeft:"20px"}}>
        안녕하세요. 첫글이네요
        </Link>
        <a style={{color:"lightgray", float:"right"}}>2023.06.04</a>
        <div className="sibal">
            <Count/>
        </div>
        </div>
        </>
    );
}

export default List;


{/*홈 페이지에 있는 리스트 형태의 글을 컴포넌트로 다시 수정 할예정*/}   
