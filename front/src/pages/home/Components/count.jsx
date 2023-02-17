import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../css/home.css";
import ButtonFetch from "./buttonFetch";

function Count(props) {
    return (
        <div style={{ float: "right" }}>
            <span>
                <button style={{fontSize: "15px", border: "1px solid gray", borderRadius: "5px"}}
                    onClick={() => {
                        ButtonFetch("like", props.value.id);
                    }}>
                    <FontAwesomeIcon icon="thumbs-up" />
                    {props.value.likes === null ? 0 : props.value.likes}
                </button>
            </span>
            
            &nbsp;
            <button style={{fontSize: "15px", border: "1px solid gray", borderRadius: "5px"}}>
                <FontAwesomeIcon icon="comment" />
                {props.value.reply === null ? 0 : props.value.reply}
            </button>
        </div>
    );
}

export default Count;
