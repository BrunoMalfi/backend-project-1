const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/ReviewController.js')
const {authentication, isAdmin} = require('../middleware/authentication.js')

router.post('/new',authentication,ReviewController.create)
router.put('/update',authentication,ReviewController.update)
//router.delete('/delete/:id',authentication,isAdmin,ReviewController.delete)
//router.get('/showallitems',ReviewController.showAllItems)
//router.get('/getitembyid/:id',ReviewController.getItemById)

module.exports = router;