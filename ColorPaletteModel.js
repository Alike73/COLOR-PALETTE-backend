
const mongoose = require('mongoose');

const colorPaletteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    color_1: {
        type: String,
        required: true
    },
    color_2: {
        type: String,
        required: true
    },
    color_3: {
        type: String,
        required: true
    },
    color_4: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('ColorPalette', colorPaletteSchema);