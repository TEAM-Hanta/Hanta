import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Count from "./count";
import "../../css/home.css"
import { Link } from "react-router-dom";

function List(props) {
    const coment = props.value.content.substr(0,5);
    return (
        <>
        <div style={{paddingLeft:"15%", paddingRight:"15%"}} className="list">
        <Link to={'/detail/' + props.value.id} >
            <div> 
                <br></br>
                <h4><FontAwesomeIcon icon="user" />{props.value.anonymous === 1 ? '익명' : props.value.nickname}</h4>
        
                {props.value.title}
        
                <br></br>
                {coment}... {/* 내용 축약 시켜서 내보내기 */}
                
                <a style={{color:"lightgray", float:"right"}}>{new Date(props.value.created_at).toLocaleString("ko-KR",{timeZone:'UTC'})}</a>
                <div className="sibal">
                    <Count value ={{likes : props.value.like_count,reply : props.value.reply_count}}/>
                </div>
            </div>   
        </Link>
        </div>
        </>
    );
}

export default List;


/*홈 페이지에 있는 리스트 형태의 글을 컴포넌트로 다시 수정 할예정*/
