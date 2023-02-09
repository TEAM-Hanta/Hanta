import React, { Suspense, useEffect, useState } from 'react';
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

function DetailNote() {
    const params = useParams();
    return (
        <>
            <Suspense style={{ textAlign: 'center', fontSize: '40px' }} fallback={<>...로딩</>}>
                <NoteDetail value={fetchDetail(params.id)}></NoteDetail>
            </Suspense>
        </>
    );
}

export default DetailNote;
