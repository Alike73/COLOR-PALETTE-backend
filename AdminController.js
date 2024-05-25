
const AdminModel = require('./AdminModel');

// GET
module.exports.getMyPermission = async(req, res) => {
    const myPermission = await AdminModel.find();
    res.send(myPermission)
}

// POST
module.exports.saveMyPermission = async(req, res) => {
    const { adminName, password } = req.body;
    AdminModel.create({ adminName, password })
    .then((data) => {console.log('Permission is added!')
    res.send(data)
    })
}
