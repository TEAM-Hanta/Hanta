import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import List from "../components/list";

function Home() {
    return (
        <>
            <div style={{paddingLeft:"15%"}}>
                <h1>게시판</h1>
            </div>
            <div style={{paddingLeft:"15%"}}>
                <div>
                    <button style={{borderRadius:"10px", borderColor:"grey"}}>인기글</button> {" "}
                    <input style={{borderRadius:"10px"}}></input> {" "}
                    <FontAwesomeIcon icon="magnifying-glass"/>
                </div>
                {/*차후 컨포넌트로 리스트 만들예정*/}
            </div>
            <List /><List /><List /><List /><List /><List /><List /><List />
        </>
    );
}

export default Home;
