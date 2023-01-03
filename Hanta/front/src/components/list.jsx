import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function List() {
    return (
        <>
        <div>
            <FontAwesomeIcon icon="user" />익명 
        </div>
        <div className="list">
        <h4>17:35</h4>
        <h5>익명이 작성한 글</h5>
        </div>
        <div>
            <FontAwesomeIcon icon="thumbs-up" />0
            <FontAwesomeIcon icon="comment" />1
        </div>
        </>
    );
}

export default List;


/*홈 페이지에 있는 리스트 형태의 글을 컴포넌트로 다시 수정 할예정*/