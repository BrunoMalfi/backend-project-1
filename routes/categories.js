const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController.js')

router.post('/new',CategoryController.create)
router.put('/update/:id',CategoryController.update)
router.delete('/delete/:id',CategoryController.delete)
router.get('/getcategorybyid/:id',CategoryController.getCategoryById)
router.get('/showallcategories',CategoryController.showAllCategories)
router.get('/getcategorybyname/:name',CategoryController.getCategoryByName)


module.exports = router;