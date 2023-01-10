import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/home.css"
import List from "../components/list";
import Comment from "../components/comment";
import Report from "../components/dropdown";



function Letter() {
    return (
        <>
        <div style={{paddingLeft:"15%"}}>
        <h1><FontAwesomeIcon icon="arrow-left"/>
        <div style={{float:"right", paddingRight:"20%"}}>
        <Report/>
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
