function ButtonFetch(name, id, type = 'POST') {
    fetch(`http://localhost:8080/api/posts/${id}/${name}`, {
        method: type,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        body: {
            // 로그인 되면 아이디 전달
        },
    });
}

export default ButtonFetch;
