import React from "react";
import Myletter from "../components/myletter";

function Mypage() {
    return (
        <>
            <div>
                <h1>마이페이지</h1>
                <button>로그아웃</button>
            </div>

            <div className="mypage">
            <button>작성글</button>
            <button>댓글단 글</button>
            <button>좋아요한 글</button>
            </div>

            <br></br>

            <div>
            <Myletter /><Myletter /><Myletter /><Myletter />
            </div>
        </>
    );
}

export default Mypage;
