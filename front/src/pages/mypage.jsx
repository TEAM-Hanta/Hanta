import React from "react";
import Myletter from "../components/myletter";
import "../css/write.css"

function Mypage() {
    return (
        <>
            <div style={{paddingLeft:"15%"}}>
                <h1>마이페이지
                <button className="button">로그아웃</button>
                </h1>
            </div>

            <br/>

            <div className="buthon">
            <button className="buthony">작성글</button>
            <button className="buthony">댓글단 글</button>
            <button className="buthony">좋아요한 글</button>
            </div>

            <div>
            <Myletter /><Myletter />
            </div>
        </>
    );
}

export default Mypage;
