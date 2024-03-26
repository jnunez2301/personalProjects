const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    generatedUrl: {
        type: String,
        minLength: 3,
        required: true,
        unique: true
    },
    code: {
        type: String,
        minLength: 3,
        required: true,
    }
})

module.exports = mongoose.model('Urls', UrlSchema)