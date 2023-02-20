import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Report from "./dropdown";
import "./reply.css";
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

function Reply(props) {
    const [showReply, setShowReply] = useState(props.value.map(() => false));

    const handleReplyClick = (index) => () =>
        setShowReply((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        // const content = e.target.content.value;
        // const post_type = e.target.post_type.value; //라디오 버튼으로 게시판 추가하기
        // // const anonymous = isChecked;
        // const userId = localStorage.getItem("userId");

        try {
            const response = await fetch("http://localhost:8080/api/posts/reply2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    // content,
                    // userId,
                    // post_type,
                    // anonymous,
                }),
            });
            const data = await response.json();
            // navigate('/');

            if (!response.ok) {
                throw new Error(data.message);
            }
        } catch (err) {
            // setError(err.message || '알 수 없는 에러가 발생했습니다.');
        }
    };

    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        setShowNotification(true);
    }, []);

    const handleButtonClick = () => {
        NotificationManager.info("신고되었습니다", "댓글", 3000);
    };

    return (
        <>
            <div>
                {props.value?.map((reply, idx) => (
                    <div style={{ margin: "15px" }} key={idx}>
                        <div style={{ fontSize: "18px" }} className={reply.layer ? "reply" : "reply_reply"}>
                            <h4 style={{ fontSize: "18px" }}>
                                <button style={{ border: "1px solid gray", borderRadius: "5px" }}>
                                    <FontAwesomeIcon icon="user" />
                                </button>{" "}
                                {reply.anonymous === 1 ? "익명" : reply.nickname}
                            </h4>
                            <h4 style={{ fontSize: "18px" }}>{reply.content}</h4>
                            <a style={{ color: "gray", float: "right", fontSize: "12px", paddingTop: "12px" }}>
                                {new Date(reply.created_at).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul', dateStyle: 'long', timeStyle: 'short' })}
                            </a>
                            {reply.layer ? (
                                <></>
                            ) : (
                                <button
                                    style={{
                                        fontSize: "15px",
                                        border: "solid 1px #ababab",
                                        borderRadius: "5px",
                                    }}
                                    onClick={handleReplyClick(idx)}>
                                    답글
                                </button>
                            )}{" "}
                            {showReply[idx] && (
                                <form>
                                    <input
                                        style={{ borderRadius: "5px", width: "150px", height: "25px", border: "1px solid gray", marginTop: "5px" }}
                                        type="text"
                                    />{" "}
                                    <button style={{ fontSize: "15px", border: "solid 1px #ababab", borderRadius: "5px" }} type="submit">
                                        작성
                                    </button>
                                </form>
                            )}
                            <button
                                style={{
                                    fontSize: "15px",
                                    border: "solid 1px #ababab",
                                    borderRadius: "5px",
                                    color:"red"
                                }}
                                onClick={handleButtonClick}>
                                신고
                            </button>
                            {showNotification && <NotificationContainer />}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Reply;
