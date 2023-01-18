import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ Suspense, useEffect,useState } from "react";
import List from "./Components/list";

function fetchUser(param) {
    let user;
    const suspender = fetch(
        `http://localhost:3000/api/post/${param}`
        )
        .then((response) => response.json())
        .then((data) => {
        user = data;
        });
    return {
      read() {
        if (!user) {
          throw suspender;
        } else {
          return user;
        }
      }
    };
  }

function BoardList() {
    const [list,setList] = useState([]);
  
    return (
        <>
            <div style={{paddingLeft:"15%"}}>
                <h1>게시판</h1> {/*게시판 종류를 Link로 받아옴 함수로 넣어줄것*/}
            </div>
            <div style={{paddingLeft:"15%"}}>
                <div>
                    <button style={{borderRadius:"10px", borderColor:"grey"}}>인기글</button>
                    <input style={{borderRadius:"10px"}}></input>
                    <FontAwesomeIcon icon="magnifying-glass"/>
                </div>
                {/*차후 컨포넌트로 리스트 만들예정*/}
            </div>
            <Suspense fallback={<>...로딩</>}>
                <List value={fetchUser()}></List>
            </Suspense>
            
        </>
    );
}

export default BoardList;
