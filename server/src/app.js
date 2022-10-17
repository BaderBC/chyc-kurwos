const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();

const WyjdzController = require('./controllers/wyjdz.controller');
const HistoryController = require('./controllers/history.controller');
const { AuthController } = require('./controllers/auth.controller');


app.use(helmet());
app.use(express.static(path.join(__dirname,'..' , '..', 'client')));
app.use(bodyParser.urlencoded({
    extended: true,
}));


app.use('/wyjdz', WyjdzController);
app.use('/history', HistoryController);
app.use('/auth', AuthController);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'homepage', 'index.html'));
})

module.exports = app;