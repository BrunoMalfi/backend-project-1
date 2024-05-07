const { Sequelize,Review,Product,User} = require('../models/index.js');

const ReviewController={
    create(req, res) {
        Review.create(req.body)
        .then(review => res.status(201).send({ message: 'Successful review created ', review}) )
        .catch(err =>console.error(err))
    },
    update(req,res){
        Review.findByPk(req.body.id).then(oldReview=>{
            Review.update(req.body,
                {
                    where: {
                        id: req.body.id
                    }
                })
                .then(() => {
                    Review.findByPk(req.body.id).then(newReview=>{
                        res.status(201).send({ message: 'Successful review updated ', oldReview, newReview })
                    }).catch(err =>console.error(err))
                }).catch(err =>console.error(err))
            }).catch(err =>console.error(err))
    },
    delete(req, res) {
        Review.findByPk(req.params.id).then(review=>{
            Review.destroy({
                where: {
                    id: req.params.id
                }
            }).then(() => res.status(201).send({ message: 'Deleted review with id ', review}))
              .catch(err =>console.error(err))
        })
        .catch(err =>console.error(err))
    },
    showAllReviews(req,res){
        Review.findAll()
        .then(reviews => res.status(201).send({ message: 'All reviews ', reviews}) )
        .catch(err =>console.error(err))
    },
    showReviewById(req, res){
        Review.findByPk(req.params.id
            ,{include: [{model : User,attributes:["id","name","eMail"]},
            {model : Product,attributes:["item_number","item_description","price","id"]}]}
        )
        .then(review => res.status(201).send({ message: 'Review ', review}) )
        .catch(err =>console.error(err))
    },
    showReviewsByItemId(req,res){
        Review.findAll({
            where: {
                ProductId: req.params.id
            }            
        })
        .then(reviews => res.status(201).send({ message: 'Reviews ', reviews}) )
        .catch(err =>console.error(err))
    }
}

module.exports = ReviewController