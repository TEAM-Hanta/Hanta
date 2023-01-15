import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./reply.css"

function Reply(props) {

    console.log(props)
    return (
        <>
        <div>

            {props.value?.map((reply) => (
                <div key={reply.index}>
                    <br></br>
                    <div className= {reply.layer ?  'reply' : 'reply_reply'}>
                    <h4>프로필 : {reply.anonymous === 1? '익명':reply.nickname}</h4>
                    <h4>{reply.content}</h4>
                    <a>{new Date(reply.created_at).toLocaleString("ko-KR",{timeZone:'UTC'})}</a>
                    </div>
                </div>
            ))};

        </div>
        </>
    );
}

export default Reply;
