import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../css/home.css';
import Report from './dropdown';
import Reply from './reply';

function NoteDetail({ value }) {
    const data = value.read();

    return (
        <>
            {data.map((v) => (
                <div key={v.id}>
                    <div>
                        {/*유저 프로필과 닉네임 글작성 div */}
                        <h2>[유저 프로필]{v.nickname}</h2>
                        {new Date(v.send_date).toLocaleString('ko-KR', { timeZone: 'UTC', dateStyle: 'long', timeStyle: 'short' })}
                    </div>

                    <br />
                    <div>
                        {' '}
                        {/* 글내용 div */}
                        {v.content}
                    </div>
                </div>
            ))}
        </>
    );
}

export default NoteDetail;
