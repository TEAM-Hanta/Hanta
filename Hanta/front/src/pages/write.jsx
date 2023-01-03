import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../FontAwesome";

function Write() {
    return (
        <>
            <div className="ct">
                <FontAwesomeIcon icon="arrow-left" />
                <button>올리기</button>
                <form>
                    <input type="text" />
                    <br />
                    <input />
                </form>
            </div>
        </>
    );
}

export default Write;
