const path = require('path');
const express = require('express');

const app = express();

const WyjdzController = require('./controllers/wyjdz.controller');
const HistoryController = require('./controllers/history.controller');
const { AuthController } = require('./controllers/auth.controller');


app.use(express.static(path.join(__dirname,'..' , '..', 'client')));
app.use(express.urlencoded({
    extended: false,
}));


app.use('/wyjdz', WyjdzController);
app.use('/history', HistoryController);
app.use('/auth', AuthController);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'homepage', 'index.html'));
})

module.exports = app;