const { Sequelize,Review,Product,User} = require('../models/index.js');

const ReviewController={
    create(req, res) {
        Review.create(req.body)
        .then(review => res.status(201).send({ message: 'Successful review created ', review}) )
        .catch(err =>console.error(err))
    },
    update(req,res){
        Review.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(review => res.status(201).send({ message: 'Successful review updated ', review }))
            .catch(err =>console.error(err))
    },
}

module.exports = ReviewController