import React, { Component, useState } from 'react';
import Myletter from "./myletter";
import "../css/write.css"
import Modaly from "./modaly";

function Mypage() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
    return (
        <>
            <div>
                <h1 style={{paddingLeft:"15%", paddingRight:"15%"}}>마이페이지
                <button onClick={openModal} className="button">로그아웃</button>
                </h1>
            </div>

            <br/>

            <div className="buthon">
            <button className="buthony">작성글</button>
            <button className="buthony">댓글단 글</button>
            <button className="buthony">좋아요한 글</button>
            </div>

            <br/>

            <div>
            <Myletter /><Myletter />
            </div>

        <Modaly open={modalOpen} close={closeModal} header="Modal heading">
        {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달 */}
        {/* 팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요! */}
        </Modaly>


        </>
    );
}

export default Mypage;
