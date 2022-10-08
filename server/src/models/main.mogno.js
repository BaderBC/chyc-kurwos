const mongoose = require('mongoose');

const mainSchema =  new mongoose.Schema({
    whereIsPornol: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now(),
    }
}, {
    collection: 'wyjscia'
})

module.exports = mongoose.model('main', mainSchema);