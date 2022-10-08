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
        console.table(query);

        if (typeof query.date === 'string') query.date =  Number(query.date);
        if (typeof query.date !== "number" && query.date !== undefined) {
            console.table(query);
            throw new Error("lol");
        }

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
        //console.error(err);
        await res.status(400).send({
            msg: err.message,
            ok: false
        })
    }
})

module.exports = Router;