import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Count from "./count";
import "../css/home.css"

function List() {
    return (
        <>
        <div style={{paddingLeft:"15%", paddingRight:"15%"}} className="list">
            <br></br>
        <h4><FontAwesomeIcon icon="user" />익명</h4>
        <p>익명의 글입니다.</p>
        <div className="sibal">
            <Count/>
        </div>
        </div>
        </>
    );
}

export default List;


{/*홈 페이지에 있는 리스트 형태의 글을 컴포넌트로 다시 수정 할예정*/}   
