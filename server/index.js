const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const WyjdzController = require('./controllers/wyjdz.controller');

app.use(express.static(path.join('..', 'client')));
app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: false,
}));


app.use('/wyjdz', WyjdzController);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'homepage', 'index.html'));
})


app.listen(8080);