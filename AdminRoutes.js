
const { Router } = require('express');
const { getMyPermission, saveMyPermission } = require('./AdminController');
const permissionRouter = Router();


permissionRouter.get('/getMyPermission', getMyPermission);
permissionRouter.post('/saveMyPermission', saveMyPermission);

module.exports = permissionRouter;