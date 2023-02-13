import React from "react";
import { Link } from "react-router-dom";

function Home() {
    console.log(localStorage);
    return (
        <>
            <div>
                <div>
                    <h2 style={{ fontSize: "35px", fontWeight: "bold", textAlign: "center", color: "darkorange", marginLeft: "20px" }}>
                        한아전 에브리타임 <img style={{ width: "42px", height: "42px" }} alt="bg" src="img/jolla.png" />
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

                <img
                    style={{ margin: "auto", display: "block", width: "370px", height: "160px", borderRadius: "30px", marginTop: "5px", marginBottom: "5px" }}
                    alt=""
                    src="img/final.png"
                />

                <div style={{ margin: "0 auto", display: "block", border: "2px solid gray", width: "400px" }}></div>
                <br />

                <div
                    style={{
                        width: "350px",
                        height: "100px",
                        border: "2px solid gray",
                        backgroundColor: "#e9ecef",
                        margin: "0 auto",
                        display: "block",
                        borderRadius: "30px",
                    }}></div>

                <br />

                <div
                    style={{
                        width: "350px",
                        height: "100px",
                        border: "2px solid gray",
                        backgroundColor: "#e9ecef",
                        margin: "0 auto",
                        display: "block",
                        borderRadius: "30px",
                    }}></div>
            </div>
        </>
    );
}
export default Home;
