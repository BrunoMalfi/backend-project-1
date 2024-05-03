const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserControllers.js')

router.post('/new',UserController.create)

module.exports = router;