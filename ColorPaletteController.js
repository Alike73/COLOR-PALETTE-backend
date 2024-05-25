
const ColorPaletteModel = require('./ColorPaletteModel');

// GET
module.exports.getPalettes = async(req, res) => {
    const myPalettes = await ColorPaletteModel.find();
    res.send(myPalettes)
}

// POST
module.exports.savePalette = async(req, res) => {
    const { title, category, color_1, color_2, color_3, color_4 } = req.body;
    ColorPaletteModel.create({ title, category, color_1, color_2, color_3, color_4 })
    .then((data) => {console.log('Color Palette is added!')
        res.send(data)
    })
}

// DELETE
module.exports.deletePalette = async(req, res) => {
    const { _id, } = req.body;
    ColorPaletteModel.findByIdAndDelete(_id)
    .then(() => res.send('Color Palette is deleted!!!'))
}

// EDIT
module.exports.editPalette = async(req, res) => {
    const { _id, title, category, color_1, color_2, color_3, color_4 } = req.body;
    ColorPaletteModel.findByIdAndUpdate(_id, { title, category, color_1, color_2, color_3, color_4 })
    .then(() => res.send('Palette is updated!!!'))
}