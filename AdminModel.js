
const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
    adminName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('MyPermissions', permissionSchema);