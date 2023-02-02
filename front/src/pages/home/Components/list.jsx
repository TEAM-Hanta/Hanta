import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Count from "./count";
import "../../css/home.css"
import { Link } from "react-router-dom";

function List({value}) {
    const data = value.read();
    return (
        <>
        {data. map( v =>
        <div key={ v .id}>
            <div className="list">

            <Link style={{textDecoration:"none", color:"black"}} to={'/detail/' + v.id} >
                <div> 
                    <br/>
                    <h4 style={{fontSize:"30px", fontWeight:"bold"}}><FontAwesomeIcon icon="user" />{v.anonymous === 1 ? '익명' : v.nickname}</h4>

                </div>


            <div>
                    <div style={{fontSize:"20px"}}> 제목: {v.title}
                    <div style={{color:"gray", float:"right", fontSize:"13px", paddingTop:"13px"}}>{new Date(v.created_at).toLocaleString("ko-KR",{timeZone:'UTC'})}</div>
                    </div>
                    
                    <div>
                    <div style={{fontSize:"20px"}}> 내용: {v.content.substr(0,5)}... {/* 내용 축약 시켜서 내보내기 */}
                        <div className="sibal">
                            <Count value ={{likes : v.like_count,reply : v.reply_count}}/>
                        </div>
                    </div>
                        
                        
                    </div>
                    

                    
                    
                    
                    
            </div>
                    
                   
            </Link>

            </div>
            </div>
        )}
        </>
    );
}

export default List;


/*홈 페이지에 있는 리스트 형태의 글을 컴포넌트로 다시 수정 할예정*/
