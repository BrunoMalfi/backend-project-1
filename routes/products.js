const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')

router.post('/new',ProductController.create)
router.put('/update',ProductController.update)
router.delete('/delete/:id',ProductController.delete)
router.get('/showallitems',ProductController.showAllItems)
router.get('/getitembyid/:id',ProductController.getItemById)
router.get('/getitembydescription/:title',ProductController.getItemByDescription)
router.get('/getitembyprice/:price',ProductController.getItemByPrice)
router.get('/getllItemsorderbyprice',ProductController.getAllItemsOrderByPrice)

module.exports = router;