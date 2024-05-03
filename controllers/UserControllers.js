const { User,Token,Order,Product,Sequelize} = require('../models/index.js');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']

const { Op } = Sequelize;

const UserController = {
    create(req, res) {
        //req.body.role = "user";
        const password = bcrypt.hashSync(req.body.password,10)
        User.create({...req.body, password:password})
            .then(user => res.status(201).send({ message: 'Successful user created ', user }))
            .catch(err =>console.error(err))
    },
    login(req,res){
        User.findOne({
            where:{
                email:req.body.eMail
            }
        }).then(user=>{
            if(!user){
                return res.status(400).send({message:"Wrong usser or Password"})
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if(!isMatch){
                return res.status(400).send({message:"Wrong usser or Password"})
            }
            const token = jwt.sign({ id: user.id }, jwt_secret);
 			Token.create({ token, UserId: user.id });
            res.send({ message: 'Bienvenid@ ' + user.name, user, token });
        })
        .catch(err =>console.error(err))
    },
    getUserOrders(req,res){
        User.findByPk(req.params.id
            ,{include: [{model : Order,
                        include: [{ model: Product, through: { attributes: [] } }]
            }]}
        )
            .then(user => res.status(201).send({ message: 'User :  ', user }))
            .catch(err =>console.error(err))
    },

}

module.exports = UserController