import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import "../css/home.css"
import List from "./Components/list";
import Comment from "./Components/comment";

function Letter() {
    return (
        <>
        <div style={{paddingLeft:"15%"}}>
        <h1><FontAwesomeIcon icon="arrow-left"/>
        <FontAwesomeIcon style={{float:"right", paddingRight:"20%"}} icon="ellipsis-vertical"/></h1>
        </div>

        <br/>

        <div className="letter">
        <List/>
        </div>

        <Comment/>




        </>
    );
}

export default Letter;
