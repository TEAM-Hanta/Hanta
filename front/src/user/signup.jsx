import React from 'react';
import "./signup.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function signUp() {
    
    const onSubmitHandler = (e) => {
        const nickname = e.target.nickname.value;
        const password = e.target.password.value;
        const major = e.target.major.value;
        fetch('http://localhost:8080/api/signup', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nickname,
                password,
                major,
            }),
        });
    };
    return (
    <>
    <Card className='fuck' style={{ width: '350px', height:"550px" }}>
     <ListGroup variant="flush">

     <form onSubmit={onSubmitHandler}>
        <div className='inputking'> 
        <img style={{width:"270px", height:"200px" }} alt="intro" src="img/signup 2.png"/>
        <input className='input' type='nickname' id='title_txt' placeholder=' 아이디' name="id"/>
        <input className='input' type='nickname' id='title_txt' placeholder=' 닉네임' name="nickname"/>
        <input className='input' type='password' id='title_txt' placeholder=' 비밀번호' name="password"/>
        <input className='input' type='password' id='title_txt' placeholder=' 비밀번호 확인' name="password"/>
        <input className='input' type='major' id='title_txt' placeholder=' 전공학과' name="major"/>
        <button className="button">회원가입</button>
        </div>
         </form>
         </ListGroup>
         </Card>
        
    </>
    );
}

export default signUp;