const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController.js')
const {authentication, isAdmin} = require('../middleware/authentication.js')
const {imageLoad} = require('../middleware/multer.js')

router.post('/new',authentication,isAdmin,imageLoad,ProductController.create)
router.put('/update',authentication,isAdmin,ProductController.update)
router.delete('/delete/:id',authentication,isAdmin,ProductController.delete)
router.get('/showallitems',ProductController.showAllItems)
router.get('/getitembyid/:id',ProductController.getItemById)
router.get('/getitembydescription/:title',ProductController.getItemByDescription)
router.get('/getitembyprice/:price',ProductController.getItemByPrice)
router.get('/getllItemsorderbyprice',ProductController.getAllItemsOrderByPrice)

module.exports = router;