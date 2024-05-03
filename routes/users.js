const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserControllers.js')
const {authentication} = require('../middleware/authentication.js')

router.post('/new',UserController.create)
router.post('/login',UserController.login)
router.get('/getuserorders/:id',authentication,UserController.getUserOrders)
//router.get('/getuserorders/:id',UserController.getUserOrders)
module.exports = router;