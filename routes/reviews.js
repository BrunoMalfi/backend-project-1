const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/ReviewController.js')
const {authentication, isAdmin} = require('../middleware/authentication.js')

router.post('/new',authentication,ReviewController.create)
router.put('/update',authentication,ReviewController.update)
router.delete('/delete/:id',authentication,isAdmin,ReviewController.delete)
router.get('/showallreviews',ReviewController.showAllReviews)
router.get('/showreviewbyid/:id',ReviewController.showReviewById)
router.get('/showreviewsbyitemid/:id',ReviewController.showReviewsByItemId)
module.exports = router;