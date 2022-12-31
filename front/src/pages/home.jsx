import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import List from "../components/list";

function Home() {
    return (
        <>
            <div>
                <h1>게시판</h1>
            </div>
            <div className="gesipan">
                <div>
                    <button>인기글</button>
                    <input></input>
                    <FontAwesomeIcon icon="magnifying-glass"/>
                </div>
                {/*차후 컨포넌트로 리스트 만들예정*/}
            </div>
            <List /><List /><List /><List />
        </>
    );
}

export default Home;
