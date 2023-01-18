import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Count from "./count";
import "../../css/home.css"
import { Link } from "react-router-dom";

function List({value}) {
    const data = value.read();
    return (
        <>
            <ul>    
                {data.map(v => 
                <>
                    <li>{v.name}</li>
                    <li>{v.number}</li>
                </>
                )}
            </ul>
        </>
    );
}

export default List;


/*홈 페이지에 있는 리스트 형태의 글을 컴포넌트로 다시 수정 할예정*/
