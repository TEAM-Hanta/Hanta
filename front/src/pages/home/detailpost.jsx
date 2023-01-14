import React,{ useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Components/detail";

function Detailpost() {
    const params = useParams(); //상세주소 게시물 번호들고오기
    const [post,setPost] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:8080/api/posts/${params.id}`)  //게시물 소환 api/posts/:pid${params.id}
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch(rejected => {
          console.log(rejected);
        });
    },  []);
    return (
        <> 
        {post?.map((props) => (
            <div key={props.id}>
             <Detail value = {props}/>
            </div>
        ))};
        </>
    );
}

export default Detailpost;
