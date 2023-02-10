import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../pages/home/Components/error';
import './login.css';

function Login() {
    const [error, setError] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const password = e.target.password.value;

        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    password,
                }),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }
            console.log('로그인 성공');
        } catch (err) {
            setError(err.message || '알 수 없는 에러가 발생했습니다.');
        }
    };
    return (
        <div className="loginy">
            <img style={{ width: '300px', height: '300px', paddingBottom: '20px' }} alt="bg" src="img/hanta-Logo.png" />
            <form onSubmit={onSubmitHandler}>
                <input className="input" style={{ fontSize: '22px' }} description="id" placeholder=" 아이디" type="text" name="id" />
                <br />
                <input className="input" style={{ fontSize: '22px' }} description="Password" placeholder=" 비밀번호" type="password" name="password" />
                {error.length !== 0 ? <ErrorMessage error={error} /> : null}
                <OtherMethods />
            </form>
        </div>
    );
}

const OtherMethods = (props) => (
    <div className="alternativeLogin">
        <label>
            <Link to="/signUp" className="link">
                회원이 아니신가요?
            </Link>
        </label>
        <br />
        <button className="sibar">로그인</button>
    </div>
);

export default Login;

// css추가 부가기능추가
