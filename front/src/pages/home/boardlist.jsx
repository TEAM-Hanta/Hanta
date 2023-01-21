import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ Suspense, useEffect,useState } from "react";
import { useReducer } from "react";
import List from "./Components/list";

function fetchPost() {
    let post;
    const suspender = fetch('http://localhost:8080/api/posts/')
        .then((response) => response.json())
        .then((data) => {
        post = data;
        });
    return {
        read() {
            if(!post) {
                throw suspender;
            } else {
                return post;
            }
        }
    };


}
function fetchPost1() {
    let post;
    const suspender = fetch('http://localhost:8080/api/posts/popular')
        .then((response) => response.json())
        .then((data) => {
        post = data;
        });
    return {
        read() {
            if(!post) {
                throw suspender;
            } else {
                return post;
            }
        }
    };


}
function BoardList() {
    const [list,setList] = useState([]);
    const [pop, setPop] = useState(0);

    return (
        <>
            <div style={{paddingLeft:"15%"}}>
                <h1>게시판</h1> {/*게시판 종류를 Link로 받아옴 함수로 넣어줄것*/}
            </div>
            <div style={{paddingLeft:"15%"}}>
                <div>

                    {pop === 0? <button style={{borderRadius:"10px", borderColor:"grey"}} onClick = {()=>{setPop(1)}}>인기글</button> : <button style={{borderRadius:"10px", borderColor:"grey"}} onClick = {()=>{setPop(0)}}>최신글</button>}
                    
                    
                    <input style={{borderRadius:"10px"}}></input>
                    <FontAwesomeIcon icon="magnifying-glass"/>
                </div>
                {/*차후 컨포넌트로 리스트 만들예정*/}
            </div>

            <div style={{textAlign:"center"}}>
            <Suspense fallback = {<>... 로딩</>}>
                <List value ={pop === 0? fetchPost():fetchPost1()}></List>
            </Suspense>
            </div>
            


        </>
    );
}

export default BoardList;
