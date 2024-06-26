const { Order,Product,User,Sequelize} = require('../models/index.js');
const { Op } = Sequelize;

const OrderController = {
    create(req, res) {
        Order.create(req.body)
            .then(order => {
                order.addProduct(req.body.ProductId)
                res.status(201).send({ message: 'Successful order created ', order })
            })
            .catch(err =>console.error(err))
    },
    showAllOrders(req,res){
        const orders = Order.findAll({
            include: [{ model: Product,attributes:["id","item_number","price","item_description"], through: { attributes: [] } },
                      { model: User, attributes:["id","name","eMail"]}],
          })
          .then(orders => res.status(201).send({ message: 'Orders :  ', orders }))
          .catch(err =>console.error(err))
        }
}

module.exports = OrderController