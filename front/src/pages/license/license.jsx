import { Component } from "react";
import Licensecard from "../home/Components/licensecard";
import "../css/license.css"

function License() {
    return (
        <>
            <div>
                <h1 style={{fontWeight:"bold", fontSize:"30px", marginTop:"10px", marginLeft:"20px"}}>자격증 알리미</h1>
            </div><br/>
            <Licensecard/>
        </>
    );  
}

export default License;
