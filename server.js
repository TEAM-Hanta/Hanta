const express = require('express');

const app = express();
const path = require('path');
const postRoutes = require('./routes/post-routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'front/build')));

app.use('/api/posts', postRoutes);

app.get('/', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, 'front/build/index.html'));
});

app.listen(8080);
