import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import "../css/write.css"

function Write() { 
    
    const [isChecked, setIsChecked] = useState(false);

    const onSubmitHandler = (e) => {
        const title = e.target.title.value;
        const content = e.target.content.value;
        const post_type =e.target.post_type.value; //라디오 버튼으로 게시판 추가하기
        const anonymous = isChecked;
        fetch('http://localhost:8080/api/posts/', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                content,
                post_type,
                anonymous
            }),
        });
    };
    const handleChange = (event) => {
      setIsChecked(event.target.checked);};
    return (
        <>
         <form onSubmit={onSubmitHandler}>
        <div style={{textAlign:"center"}}>
            <h1><FontAwesomeIcon style={{marginRight:"200px"}} icon="arrow-left"/>
            
            <box className="buttons">
            익명<input type='checkbox'  checked={isChecked} onChange={handleChange} name="anonymous" ></input>
            </box>

                <select className="buttons" name="post_type" id='post_type'>
                    <option value="자유">자유</option>
                    <option value="유머">유머</option>
                    <option value="테스트">테스트</option>
                </select>

                <button className="buttons">올리기</button>
            </h1>
            </div> 
        <div className='Write'>
            <div className="title">
        <input type='title' id='title_txt' placeholder='제목' name="title"/>
            </div>
        
            <div>
        <textarea id='content_txt' placeholder='글을 작성해보세요.' name="content"/>
            </div>
        </div>
         </form>  
        </>
    )
  }

export default Write;