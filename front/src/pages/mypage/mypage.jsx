import React, { Suspense,Component, useState } from 'react';
import Myletter from "./myletter";
import "../css/write.css"
import Modaly from "./modaly";


function fetchPost1() {
  let post;
  const suspender = fetch('http://localhost:8080/api/posts/')
      .then((response) => response.json())
      .then((data) => {
      post = data;
      });
  return {
      read() {
          if(!post) {
              throw suspender;
          } else {
              return post;
          }
      }
  };


}

function fetchPost2() {
  let post;
  const suspender = fetch('http://localhost:8080/api/scrap')
      .then((response) => response.json())
      .then((data) => {
      post = data;
      });
  return {
      read() {
          if(!post) {
              throw suspender;
          } else {
              return post;
          }
      }
  };


}

function fetchPost3() {
  let post;
  const suspender = fetch('http://localhost:8080/api/like')
      .then((response) => response.json())
      .then((data) => {
      post = data;
      });
  return {
      read() {
          if(!post) {
              throw suspender;
          } else {
              return post;
          }
      }
  };


}





function Mypage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [page , setPage] = useState(0);

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
                <button onClick={openModal} className="button " style={{float:"right"}}>로그아웃</button>
                </h1>
            </div>

            <br/>

            <div className="buthon">
            <button className="buthony"onClick = {()=>{setPage(0)}}>작성글</button>
            <button className="buthony"onClick = {()=>{setPage(1)}}>댓글단 글</button>
            <button className="buthony"onClick = {()=>{setPage(2)}}>좋아요한 글</button>
            </div>

            <br/>y

            <Suspense fallback = {<>... 로딩</>}>
                <Myletter value = {page === 0? fetchPost1() : (page === 1? fetchPost2(): fetchPost3())}></Myletter>
            </Suspense>

        <Modaly open={modalOpen} close={closeModal} header="Modal heading">
        {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달 */}
        </Modaly>


        </>
    );
}

export default Mypage;
