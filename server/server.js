const express = require('express');

const app = express();
const path = require('path');
const postRoutes = require('./routes/post-routes');
const userRoutes = require('./routes/user-routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'front/build')));

// cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');

    next();
});

app.use('/api', userRoutes);
app.use('/api/posts', postRoutes);

app.get('/', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, 'front/build/index.html'));
});

// 오류처리 미들웨어
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || '알 수 없는 오류가 발생했습니다.' });
});

app.listen(8080);
