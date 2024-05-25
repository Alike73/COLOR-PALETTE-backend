
const { Router } = require('express');
const { getPalettes, savePalette, deletePalette, editPalette } = require('./ColorPaletteController');
const colorPaletteRouter = Router();


colorPaletteRouter.get('/', getPalettes);
colorPaletteRouter.post('/savePalette', savePalette);
colorPaletteRouter.post('/deletePalette', deletePalette);
colorPaletteRouter.post('/editPalette', editPalette);

module.exports = colorPaletteRouter;