const mongoose = require('mongoose');

const AuthSchemata = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    }
}, {
    collection: 'auth'
})

module.exports = mongoose.model('auth', AuthSchemata);