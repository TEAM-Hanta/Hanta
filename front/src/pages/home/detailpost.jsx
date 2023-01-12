import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/home.css"
import List from "./Components/list";
import Comment from "./Components/comment";

function Letter() {
    return (
        <>
        <div style={{paddingLeft:"15%"}}>
        <h1><FontAwesomeIcon icon="arrow-left"/>
        <div style={{float:"right", paddingRight:"20%"}}>
        </div>
        </h1>
        </div>

        <br/>

        <div className="letter">
        <List/>
        </div>

        <Comment/>


        </>
    );
}

export default Letter;
