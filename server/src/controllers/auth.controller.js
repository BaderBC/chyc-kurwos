const express = require('express');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const Router = express.Router();
const authModel = require('../models/auth.mongo');
const AUTH_SECRET_KEY = process.env.AUTH_SECRET_KEY;



Router.post('/', (req, res) => {
    try {
        const { id } = req.query || req.body;
        console.log(id);

        //TODO: check code bellow:
        authModel
            .findOne({ id })
            .exec((err, result) => {
                try {
                    if (err) throw err;
                    if (result === null) throw new Error('ERROR: wrong registration link');

                    const token = jwt.sign({
                        pornol: true,
                        zjeb: true
                    }, AUTH_SECRET_KEY);

                    console.log(token);

                    res.status(200).json({
                        token,
                        ok: true
                    });
                } catch (err) {
                    console.error(err);
                    res.status(500).json({
                        msg: err.message,
                        ok: false
                    })
                }
            });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            msg: err.message,
            ok: false
        })
    }
})



function verifyMiddleware(req, res, next) {
    try {
        const { token } = JSON.parse(JSON.stringify(req.body));
        console.log(token);

        if (typeof token !== 'string') {
            return res.status(400).json({
                msg: 'ERROR: Invalid JWT token type (JWT should be a string)',
                ok: false
            })
        }

        const decodedJWT = jwt.verify(token, AUTH_SECRET_KEY);

        if (decodedJWT.pornol) {
            next();
        } else {
            return res.status(400).json({
                msg: "ERROR: Invalid JWT token",
                ok: false
            });
        }


    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: err.message,
            ok: false
        })
    }
}

module.exports = {
    AuthController: Router,
    verifyMiddleware
}