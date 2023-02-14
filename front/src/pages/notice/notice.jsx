import Noticecp from './noticecp';
import React, { useEffect, useState } from 'react';

function Notice() {
    const [noti, setNoti] = useState([
        { id: 1, title: '알림제목', date: '알림날짜' },
        { id: 2, title: '알림제목', date: '알림날짜' },
    ]);

    const str = 'notice';

    useEffect(() => {
        fetch(`https://localhost:8080/${str}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        }) //재사용
            .then((response) => response.json())
            .then((data) => setNoti(data))
            .catch((rejected) => {
                console.log(rejected);
            });
    }, []);

    return (
        <>
            <div>
                <h1 style={{ fontWeight: 'bold', fontSize: '30px', marginLeft: '20px' }}>알림</h1>
            </div>
            {noti?.map((props) => (
                <div key={props.id}>
                    <Noticecp value={props} />
                </div>
            ))}
            ;
        </>
    );
}

export default Notice;
