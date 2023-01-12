import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import "../../css/home.css"

function Count() {

    let [up, down] = useState(0);
    let [ lik, liks] = useState(3); /* 게시글 좋아요 갯수 */
    let [ comment ] = useState(10); /* 해당 usestate 데이터는 서버에서 들고올것 */

    return (
        <div>
        <span onClick={()=>{ up === 0 ? down(1) && liks(lik + 1) : down(0) && liks(lik -1)} }>
            <FontAwesomeIcon icon="thumbs-up" />
        </span>{lik}
            &nbsp;&nbsp;
            <FontAwesomeIcon icon="comment" />{comment}
        </div>
    );
}

export default Count;


