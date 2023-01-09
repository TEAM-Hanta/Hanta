import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/home.css"
import List from "../components/list";
import Comment from "../components/comment";



function Letter(props) {
    const [Open, setOpen] = useState(false);
    return (
        <>
        <div style={{paddingLeft:"15%"}}>
        <h1><FontAwesomeIcon icon="arrow-left"/>
        <FontAwesomeIcon onClick={() => setOpen(!Open)} style={{float:"right", paddingRight:"20%", textDecoration:"none"}} icon="ellipsis-vertical"/></h1>
        {Open && props.children}
        </div>

        <br/>

        <div className="letter">
        <List/>
        </div>

        <Comment/>


        </>
    );
}

<Letter>
  <ul>
    <li>메뉴1</li>  
    <li>메뉴2</li>  
    <li>메뉴3</li>  
    <li>메뉴4</li>  
  </ul>
</Letter>

export default Letter;
