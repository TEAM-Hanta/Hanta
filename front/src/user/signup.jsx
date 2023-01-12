import React from 'react';



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
     <form onSubmit={onSubmitHandler}>
        
         
        <input type='nickname' id='title_txt' placeholder='닉네임' name="nickname"/>
        <input type='password' id='title_txt' placeholder='비밀번호' name="password"/>
        <input type='major' id='title_txt' placeholder='전공학과' name="major"/>
        <button className="button">회원가입</button>   
     
         </form>  
    </>
    );
}

export default signUp;