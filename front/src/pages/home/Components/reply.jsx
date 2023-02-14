import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './reply.css';

function Reply(props) {
    const [showReply, setShowReply] = useState(props.value.map(() => false));

    const handleReplyClick = (index) => {
        setShowReply((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        // const content = e.target.content.value;
        // const post_type = e.target.post_type.value; //라디오 버튼으로 게시판 추가하기
        // // const anonymous = isChecked;
        // const userId = localStorage.getItem("userId");

        try {
            const response = await fetch('http://localhost:8080/api/posts/reply2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
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
    console.log(props.value);
    return (
        <>
            <div>
                {props.value?.map((reply) => (
                    <div key={reply.index}>
                        <br></br>
                        <div className={reply.layer ? 'reply' : 'reply_reply'}>
                            <h4>프로필 : {reply.anonymous === 1 ? '익명' : reply.nickname}</h4>
                            <h4>{reply.content}</h4>
                            <a>{new Date(reply.created_at).toLocaleString('ko-KR', { timeZone: 'UTC' })}</a>
                            <button onClick={handleReplyClick(reply.index)}>답글</button>
                            {showReply[reply.index] && (
                                <form>
                                    <input type="text" />
                                    <button type="submit">작성</button>
                                </form>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Reply;
