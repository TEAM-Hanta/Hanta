import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import "../css/home.css"
import Comment from "./Components/comment";
import { useLocation } from "react-router-dom";


function Detailpost() {
    const location = useLocation();
    console.log(location)
    return (
        <>
        <div style={{paddingLeft:"15%"}}>
        <h1><FontAwesomeIcon icon="arrow-left"/>
        <div style={{float:"right", paddingRight:"20%"}}>
        </div> {location.state.id}번 게시물
        </h1>
        </div>
        <br/>

        <div className="letter">
        </div>

        <Comment/>


        </>
    );
}

export default Detailpost;
