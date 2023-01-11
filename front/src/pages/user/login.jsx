import React from "react";
import {Link} from 'react-router-dom'; 
import "../../css/login.css"

  

function Login() {  
  
  const onSubmitHandler = (e) => {
  const nickname = e.target.nickname.value;
  const password = e.target.password.value;
  fetch('http://localhost:8080/api/login', {
      method : 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          nickname,
          password,
      }),
  });
};
    return(
   <div className="loginy">
    <form onSubmit={onSubmitHandler}>
     <input className="input" description="NickName" placeholder=" 이메일" type="text" name="nickname"/>
     <br/>
     <input className="input" description="Password" placeholder=" 비밀번호" type="password" name="password"/>
     <OtherMethods/>
     </form>
   </div>
    )
  }
  

const OtherMethods = props => (
  <div className="alternativeLogin">                
    <label><Link to="/signUp" className="link">회원이 아니신가요?</Link></label>
    <br/>
    <button className="sibar">로그인</button>        
    </div> 
);



export default Login;


// css추가 부가기능추가