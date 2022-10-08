const path = require('path');

const express = require('express');

const Router = express.Router();
const mongoModel = require('../models/main.mogno');

Router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'client', 'wyjdz', 'index.html'));
})

Router.post('/', async (req, res) => {
    try {
        const query = JSON.parse(JSON.stringify(req.body));

        query.date = query.date ? new Date(query.date) : Date.now(); //TODO: query date validation;
        console.table(query);

        const newRecord = new mongoModel({
            whereIsPornol: query.whereIsPornol,
            date: query.date
        })

        await newRecord
            .save()
            .then((data) => {
                console.log(data);
                res.redirect('/');
            })
    } catch (err) {
        console.error(err);
        res.status(400).send({
            msg: err.message,
            ok: false
        })
    }
})

module.exports = Router;