const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    },
    problems: {
        type: String,
        required: false,
        trim: true
    },
    impact: {
        type: String,
        required: false,
        trim: true
    },
    vision: {
        type: String,
        required: false,
        trim: true
    },
    obstacle: {
        type: String,
        required: false,
        trim: true
    },
    generalNotes: {
        type: String,
        required: false,
        trim: true
    },
    offerMade: {
        type: Boolean,
        required: false,
    },
    closer:{
        type: String,
        required: false,
        trim: true
    },
    status: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Enable automatic timestamps

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
