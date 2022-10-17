const path = require('path');

const express = require('express');

const Router = express.Router();
const mongoModel = require('../models/main.mogno');
const { verifyMiddleware } = require('./auth.controller');


Router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'client', 'wyjdz', 'index.html'));
})

Router.post('/', verifyMiddleware, async (req, res) => {
    try {
        const query = JSON.parse(JSON.stringify(req.body));
        console.table(query);

        console.table(query);

        const newRecord = new mongoModel({
            whereIsPornol: query.whereIsPornol,
            date: Date.now()
        })


        await newRecord
            .save()
            .then((data) => {
                console.log(data);
                res.redirect('/');
            })
    } catch (err) {
        console.error(err);
        res.status(500).send({
            msg: err.message,
            ok: false
        })
    }
})

module.exports = Router;