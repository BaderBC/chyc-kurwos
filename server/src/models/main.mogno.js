const mongoose = require('mongoose');

const MainSchema =  new mongoose.Schema({
    whereIsPornol: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
        default: Date.now(),
        unique: true
    }
}, {
    collection: 'wyjscia'
})

module.exports = mongoose.model('main', MainSchema);