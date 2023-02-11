import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../css/write.css';

function WriteNote() {
    const id = 5656; // 해당 글쓴이 아이디로 수정해야 함
    const onSubmitHandler = (e) => {
        const content = e.target.content.value;
        fetch('http://localhost:8080/api/note', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                content,
            }),
        });
    };
    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div style={{ textAlign: 'center' }}>
                    <h1>
                        <FontAwesomeIcon style={{ marginRight: '200px' }} icon="arrow-left" />

                        <button className="buttons">보내기</button>
                    </h1>
                </div>
                <div className="Write">
                    <div>
                        <textarea id="content_txt" placeholder="글을 작성해보세요." maxLength={450} name="content" />
                    </div>
                </div>
            </form>
        </>
    );
}

export default WriteNote;
