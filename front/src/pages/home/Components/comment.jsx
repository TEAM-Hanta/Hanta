import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../css/home.css"

//작업시작

function Comment() {
    return (
        <>
        <div style={{paddingLeft:"15%", paddingRight:"15%"}}>

            <br></br>
        <h4><FontAwesomeIcon icon="user" />익명2
            <div style={{float:"right"}}>
                <button>댓글작성</button>
            </div>
        </h4>
        <div style={{marginLeft:"20px"}}>배고파
        <a style={{color:"lightgray", float:"right"}}>2023.06.04</a>
        </div>

        <br/>
        <FontAwesomeIcon icon="arrow-turn-down" style={{marginLeft:"50px"}}/>
        <div style={{marginLeft:"50px", marginRight:"50px", paddingBottom:"10px", backgroundColor:"lightgray", borderRadius:"1%", paddingRight:"20px", paddingLeft:"20px"}}>
        

        <div>
            <h4 style={{paddingTop:"20px"}}><FontAwesomeIcon icon="user" />익명(글쓴이)
            <div style={{float:"right"}}>
                <button>댓글작성</button>
            </div>
            </h4>
                <div style={{marginLeft:"20px"}}>
                    ㅗ
                    <a style={{color:"white", float:"right"}}>2023.06.04</a>
                </div>
        </div>

        </div>
    
        </div>
        </>
    );
}

export default Comment;
