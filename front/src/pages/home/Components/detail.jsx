import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../css/home.css"
import Comment from "./comment";

function Detail(props) {
   
    return (
        <>
        <div style={{paddingLeft:"8%"}}> {/*이쪽 div칸에 신고버튼 ui집어넣기 */}
        <h1><FontAwesomeIcon icon="arrow-left"/>
        {props.value.post_type}게시판</h1>
        </div>
        
        <div>{/*유저 프로필과 닉네임 글작성 div */}
        <h2>[유저 프로필]{props.value.anonymous === 1 ? '익명' : props.value.user_id}</h2>
         {new Date(props.value.created_at).toLocaleString("en-US",{timeZone:'UTC'})}
        </div>

        <br/>

        <div> {/*글 제목 div */}
        <h1>{props.value.title}</h1>
        </div>

        <br/>
        <div> {/* 글내용 div */}
        {props.value.content}
        </div>
        <div className="letter">
        </div>

        <Comment/>


        </>
    );
}

export default Detail;
