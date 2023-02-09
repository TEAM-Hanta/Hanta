import React, { Suspense, useState } from 'react';
import List from '../home/Components/noteList';
import '../css/write.css';
import Modaly from './modaly';

function fetchNote1() {
    let note;
    const suspender = fetch('http://localhost:8080/api/note/receive')
        .then((response) => response.json())
        .then((data) => {
            note = data;
        });
    return {
        read() {
            if (!note) {
                throw suspender;
            } else {
                return note;
            }
        },
    };
}

function fetchNote2() {
    let note;
    const suspender = fetch('http://localhost:8080/api/note/send')
        .then((response) => response.json())
        .then((data) => {
            note = data;
        });
    return {
        read() {
            if (!note) {
                throw suspender;
            } else {
                return note;
            }
        },
    };
}

function Note() {
    const [page, setPage] = useState(0);

    return (
        <>
            <div>
                <h1 style={{ fontWeight: 'bold', fontSize: '30px', marginLeft: '20px' }}>쪽지함</h1>
            </div>

            <br />

            <div className="buthon">
                <button
                    className="buthony"
                    onClick={() => {
                        setPage(0);
                    }}
                >
                    받은 쪽지
                </button>
                <button
                    className="buthony"
                    onClick={() => {
                        setPage(1);
                    }}
                >
                    보낸 쪽지
                </button>
            </div>

            <br />

            <Suspense fallback={<>... 로딩</>}>
                <List value={page === 0 ? fetchNote1() : fetchNote2()}></List>
            </Suspense>
        </>
    );
}

export default Note;
