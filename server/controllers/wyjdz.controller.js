const path = require('path');
const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'wyjdz', 'index.html'));
})

Router.post('/', (req, res) => {
    console.log(req);
    return res.redirect('/');
})

module.exports = Router;