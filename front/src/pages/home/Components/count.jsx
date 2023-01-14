import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../css/home.css"

function Count(props) {
    return (
        <div>
        <span>
            <FontAwesomeIcon icon="thumbs-up" />
        </span>{props.value.likes === null ? 0:props.value.likes}
            &nbsp;&nbsp;
            <FontAwesomeIcon icon="comment" />{props.value.reply === null ? 0 : props.value.reply}
        </div>
    );
}

export default Count;


