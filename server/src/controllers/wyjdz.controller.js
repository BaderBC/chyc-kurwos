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

        if (typeof query.date === 'string') query.date =  Number(query.date);
        if (typeof query.date !== 'number' && query.date !== undefined) {
            console.table(query);
            return res
                .status(400)
                .json({
                    msg: "ERROR: Invalid date format (date should be number)",
                    ok: false
                });
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
        await res.status(500).send({
            msg: err.message,
            ok: false
        })
    }
})

module.exports = Router;