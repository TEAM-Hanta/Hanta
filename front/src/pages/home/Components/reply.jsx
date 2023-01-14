import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../css/home.css"
import Reply2 from "./reply2";

function Reply(props) {

    console.log(props)
    return (
        <>
        
        
        {props.value?.map((reply) => (
            <div key={reply.index}>
                <h4>{reply.content}</h4>
            </div>
        ))};

        <div> {/*대댓글영역*/}
        {/* <Reply2/> */}대댓글 유기
        </div>
    
        </>
    );
}

export default Reply;
