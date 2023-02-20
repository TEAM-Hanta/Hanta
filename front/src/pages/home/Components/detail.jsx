import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/home.css";
import ButtonFetch from "./buttonFetch";
import Count from "./count";
import Report from "./dropdown";
import Reply from "./reply";
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

function Detail({ value }) {
    const data = value.read();
    console.log(data);
    const params = useParams(); //상세주소 게시물 번호들고오기
    const [reply, setReply] = useState([]);

    console.log(params);

    const [showReply, setShowReply] = useState(false);
    const handleReplyClick = () => {
        setShowReply(true);
    };

    useEffect(() => {
        fetch(`http://localhost:8080/api/posts/${params.id}/reply`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }) //리플 소환
            .then((response) => response.json())
            .then((data) => setReply(data))
            .catch((rejected) => {
                console.log(rejected);
            });
    }, []);

    reply.sort((a, b) => {
        if (a.group_id < b.group_id) return -1;
        if (a.group_id > b.group_id) return 1;

        return 0;
    }); // group번호로  댓글{대댓글} 로 분리

    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        setShowNotification(true);
    }, []);

    const handleButtonClick = () => {
        NotificationManager.info("스크랩완료!", "게시글", 3000);
    };

    return (
        <>
            {data.map((v) => (
                <div style={{ margin: "0 auto", display: "block", width: "360px" }} key={v.id}>
                    <div>
                        {/*이쪽 div칸에 신고버튼 ui집어넣기 */}
                        <h1 style={{ fontSize: "35px" }}>
                            <button style={{ border: "none", backgroundColor: "white" }}>
                                <FontAwesomeIcon icon="arrow-left" />
                            </button>
                            {v.post_type}게시판
                            <Report value={{ id: v.id }} />
                        </h1>
                    </div>
                    <br />
                    <div style={{ paddingBottom: "5px" }}>
                        {/*유저 프로필과 닉네임 글작성 div */}
                        <h2 style={{ fontSize: "20px" }}>
                            <button style={{ border: "1px solid gray", borderRadius: "5px" }}>
                                <FontAwesomeIcon icon="user" />
                            </button>{" "}
                            {v.anonymous === 1 ? "익명" : v.nickname}
                            <div style={{ color: "gray", float: "right", fontSize: "12px", paddingTop: "12px" }}>
                                {new Date(v.created_at).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul', dateStyle: 'long', timeStyle: 'short' })}
                            </div>
                        </h2>
                    </div>

                    <div style={{ paddingBottom: "5px" }}>
                        <div>
                            {" "}
                            {/*글 제목 div */}
                            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>{v.title}</h1>
                        </div>

                        <div>
                            {" "}
                            {/* 글내용 div */}
                            <h1 style={{ fontSize: "20px" }}>{v.content}</h1>
                        </div>
                    </div>

                    <div>
                        <button
                            style={{ fontSize: "15px", border: "solid 1px #ababab", borderRadius: "5px" }}
                            onClick={handleButtonClick}>
                            스크랩
                        </button>
                        {showNotification && <NotificationContainer />}
                        <Count value={{ likes: v.like_count, reply: v.reply_count, id: v.id }} />{" "}
                        <button
                            style={{ fontSize: "15px", border: "solid 1px #ababab", borderRadius: "5px" }}
                            onClick={handleReplyClick}>
                            답글
                        </button>
                        {showReply && (
                            <form>
                                <input
                                    style={{ borderRadius: "5px", width: "150px", height: "25px", border: "1px solid gray", marginTop: "5px" }}
                                    type="text"
                                />{" "}
                                <button
                                    style={{
                                        fontSize: "15px",
                                        border: "solid 1px #ababab",
                                        borderRadius: "5px"
                                    }}
                                    type="submit">
                                    작성
                                </button>
                            </form>
                        )}
                    </div>
                    <div style={{ borderBottom: "1px solid gray", marginTop: "10px" }}></div>
                    <div>
                        {" "}
                        {/*댓글 영역 */}
                        <Reply value={reply} />
                    </div>
                </div>
            ))}
        </>
    );
}

export default Detail;
