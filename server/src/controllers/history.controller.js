const express = require('express');

const Router = express.Router();
const mongoModel = require('../models/main.mogno');

Router.get('/', async (req, res) => {
    try {
        const { limit } = req.query;
        // if limit is undefined query will find all records

        await mongoModel
            .find({})
            .limit(limit)
            .select({
                date: true,
                whereIsPornol: true,
                _id: false
            })
            .sort('-date')
            .exec((err, result) => {
                if (err) throw err;

                res.status(200).json(result);
            });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: err.message,
            ok: false
        });
    }
})

module.exports = Router;