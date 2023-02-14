import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../css/home.css';
import ButtonFetch from './buttonFetch';
import Count from './count';
import Report from './dropdown';
import Reply from './reply';

function Detail({ value }) {
    const data = value.read();
    console.log(data);
    const params = useParams(); //상세주소 게시물 번호들고오기
    const [reply, setReply] = useState([]);

    console.log(params);

    useEffect(() => {
        fetch(`http://localhost:8080/api/posts/${params.id}/reply`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
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

    return (
        <>
            {data.map((v) => (
                <div key={v.id}>
                    <div style={{ paddingLeft: '8%' }}>
                        {' '}
                        {/*이쪽 div칸에 신고버튼 ui집어넣기 */}
                        <h1>
                            <FontAwesomeIcon icon="arrow-left" />
                            {v.post_type}게시판
                        </h1>{' '}
                        <Report value={{ id: v.id }} />
                    </div>

                    <div>
                        {/*유저 프로필과 닉네임 글작성 div */}
                        <h2>[유저 프로필]{v.anonymous === 1 ? '익명' : v.nickname}</h2>
                        {new Date(v.created_at).toLocaleString('en-US', { timeZone: 'UTC' })}
                    </div>

                    <br />

                    <div>
                        {' '}
                        {/*글 제목 div */}
                        <h1>{v.title}</h1>
                    </div>

                    <br />
                    <div>
                        {' '}
                        {/* 글내용 div */}
                        {v.content}
                    </div>
                    <div className="sibal">
                        <button
                            onClick={() => {
                                ButtonFetch('scrap', v.id);
                            }}
                        >
                            스크랩
                        </button>
                        <Count value={{ likes: v.like_count, reply: v.reply_count, id: v.id }} />
                    </div>

                    <div>
                        {' '}
                        {/*댓글 영역 */}
                        <Reply value={reply} />
                    </div>
                </div>
            ))}
        </>
    );
}

export default Detail;
