import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/home.css"
import Reply from "./reply";

function Detail(props) {
    
    const params = useParams(); //상세주소 게시물 번호들고오기
    const [reply,setReply] = useState([]);

    console.log(params)
    
    useEffect(() => {
        fetch(`http://localhost:8080/api/posts/${params.id}/reply`)  //리플 소환
        .then((response) => response.json())
        .then((data) => setReply(data))
        .catch(rejected => {
          console.log(rejected);
        });
    },  []);

    reply.sort((a, b) => {
        if (a.group_id < b.group_id) return -1;
        if (a.group_id > b.group_id) return 1;
    
        return 0;
    });
   
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

        <div> {/*댓글 영역 */}
            <Reply value = {reply}/>
        </div>

        </>
    );
}

export default Detail;
