import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useEffect,useState } from "react";
import List from "./Components/list";

function BoardList() {
    const [list,setList] = useState([]);
  
    useEffect(() => {
        fetch('http://localhost:8080/api/posts/')  //home이 아니라 게시판임
        .then((response) => response.json())
        .then((data) => setList(data))
        .catch(rejected => {
          console.log(rejected);
        });
    },  []);
    // list.sort((a, b) => {
    //     if (a.group_id < b.group_id) return -1;
    //     if (a.group_id > b.group_id) return 1;
    
    //     return 0;
    // });
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
            {list?.map((props) => (
            <div key={props.id}>
             <List value = {props}/>
            </div>
            
        ))};
        </>
    );
}

export default BoardList;
