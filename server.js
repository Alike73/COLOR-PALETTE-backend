const express = require('express');
const app = express();
const mongoose = require('mongoose');
const permissionRoutes = require('./admin-backend/AdminRoutes');
const colorPaletteRoutes = require('./color-palette-backend/ColorPaletteRoutes');
const cors = require('cors')

mongoose.set('strictQuery', false);
require('dotenv').config();

const PORT = 7000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_LINK)
    .then(() => console.log('WE WERE CONNECTED TO MONGO!'))
    .catch((err) => console.log('ERROR!!!'))

app.use(colorPaletteRoutes)
app.use(permissionRoutes)
// app.use(skillsRoutes)
// app.use(avatarRoutes)
// app.use(reviewRoutes)

app.listen(PORT, () => {
    console.log(`Your server is running at PORT: ${PORT}!`);
});



// =======Color-Palette-Backend===========>
// Username: alimzhanislaColorPalette
// Password: aInPjYwOC1fpoN8p
// Link:     mongodb+srv://alimzhanislaColorPalette:aInPjYwOC1fpoN8p@cluster0.kbdjecu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
