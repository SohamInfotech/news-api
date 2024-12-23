const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'artical', // You can change this depending on what you want to reference
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('source', sourceSchema);
