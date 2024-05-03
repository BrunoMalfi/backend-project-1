const { User,Sequelize} = require('../models/index.js');
const { Op } = Sequelize;

const UserController = {
    create(req, res) {
        User.create(req.body)
            .then(user => res.status(201).send({ message: 'Successful user created ', user }))
            .catch(err =>console.error(err))
    }
}

module.exports = UserController