import React, { Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from './Components/noteDetail';

function fetchDetail(param) {
    let detail;
    const suspender = fetch(`http://localhost:8080/api/note/${param}`)
        .then((response) => response.json())
        .then((data) => {
            detail = data;
        });

    return {
        read() {
            if (!detail) {
                throw suspender;
            } else {
                return detail;
            }
        },
    };
}

function readNote(params) {
    let note;
    const suspender = fetch(`http://localhost:8080/api/note/${params}/read`)
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

function DetailNote() {
    const params = useParams();

    useEffect(() => {
        readNote(params.id);
    }, []);

    return (
        <>
            <Suspense style={{ textAlign: 'center', fontSize: '40px' }} fallback={<>...로딩</>}>
                <NoteDetail value={fetchDetail(params.id)}></NoteDetail>
            </Suspense>
        </>
    );
}

export default DetailNote;
