import React from "react";
import { Link } from "react-router-dom";

function Home() {
    console.log(localStorage);
    return (
        <>
            <div>
                <div>
                    <h2 style={{ fontSize: "35px", fontWeight: "bold", textAlign: "center", color: "darkorange", marginLeft: "10px" }}>
                        <img style={{ width: "140px", height: "60px" }} alt="bg" src="img/logo.png" />
                    </h2>

                    <div style={{ margin: "0 auto", display: "block", borderTop: "3px solid gray", borderBottom: "3px solid gray", width: "400px" }}>
                        <Link style={{ margin: "30px", fontSize: "20px" }} to="/boardlist" className="link" state={{ props: "전체" }}>
                            전체
                        </Link>
                        <Link style={{ margin: "30px", fontSize: "20px" }} to="/boardlist" className="link" state={{ props: "자유" }}>
                            자유
                        </Link>
                        <Link style={{ margin: "30px", fontSize: "20px" }} to="/boardlist" className="link" state={{ props: "비밀" }}>
                            비밀
                        </Link>
                        <Link style={{ margin: "30px", fontSize: "20px" }} to="/boardlist" className="link" state={{ props: "공부" }}>
                            공부
                        </Link>
                    </div>
                </div>

                <img style={{ margin: "auto", display: "block", width: "400px", height: "200px" }} alt="" src="img/computer size.png" />

                <div style={{ margin: "0 auto", display: "block", border: "2px solid gray", width: "400px" }}></div>
                <br />

                <div
                    style={{
                        width: "350px",
                        height: "100px",
                        border: "2px solid gray",
                        backgroundColor: "white",
                        margin: "0 auto",
                        display: "block",
                        borderRadius: "30px",
                    }}>
                    <div style={{marginLeft:"10px", marginTop:"8px"}}>
                    <img style={{ width: "80px", height: "80px" }} alt="" src="img/jolla.png" />
                    <span style={{fontSize:"15px", fontFamily:"Noto Sans KR", fontWeight:"bold"}}> 공지사항은 추후 업데이트 예정입니다~</span>
                    </div>
                </div>

                <br />

                <div
                    style={{
                        width: "350px",
                        height: "100px",
                        border: "2px solid gray",
                        backgroundColor: "white",
                        margin: "0 auto",
                        display: "block",
                        borderRadius: "30px",
                    }}>
                    <div style={{marginLeft:"10px", marginTop:"8px"}}>
                    <img style={{ width: "80px", height: "80px" }} alt="" src="img/jolla.png" />
                    <span style={{fontSize:"15px", fontFamily:"Noto Sans KR", fontWeight:"bold"}}> 컨텐츠는 추후 업데이트 예정입니다~</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
