const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderControllers.js')

router.post('/new',OrderController.create)
router.get('/showallorders',OrderController.showAllOrders)


module.exports = router;