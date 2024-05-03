const { Product,Sequelize, Category} = require('../models/index.js');
const { Op } = Sequelize;

const ProductController = {
    create(req, res) {
        Product.create(req.body)
            .then(product => {
                product.addCategory(req.body.CategoryId)
                res.status(201).send({ message: 'Successful product created ', product })
            })
            .catch(err =>console.error(err))
    },
    update(req,res){
        Product.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(product => res.status(201).send({ message: 'Successful category updated ', product }))
            .catch(err =>console.error(err))
    },
    delete(req, res) {
        Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(product => res.status(201).send({ message: 'Deleted item with id ', product}))
          .catch(err =>console.error(err))
    },
    showAllItems(req,res){
        const products = Product.findAll({
            include: [{ model: Category,attributes:["name"], through: { attributes: [] } }],
          })
          .then(products => res.status(201).send({ message: 'Items :  ', products }))
          .catch(err =>console.error(err))
    
    },
    getItemById(req,res){
        Product.findByPk(req.params.id,
        {include: [{ model: Category,attributes:["name"], through: { attributes: [] } }]})
        .then(product => res.status(201).send({ message: 'Item :  ', product }))
        .catch(err =>console.error(err))
    },
    getItemByDescription(req,res){
        Product.findAll({
            where: {
                item_description: {
                    [Op.like]: `%${req.params.title}%`
                }
            }
        })
        .then(product => res.status(201).send({ message: 'Item :  ', product }))
        .catch(err =>console.error(err))
    },
    getItemByPrice(req,res){
        Product.findAll({
            where: {
                price: {
                    [Op.like]: `${req.params.price}`
                }
            }
        })
        .then(product => res.status(201).send({ message: 'Item :  ', product }))
        .catch(err =>console.error(err))
    },
    getAllItemsOrderByPrice(req,res){
        Product.findAll({
            order:[
                ['price','DESC']
            ]
        })
        .then(products => res.status(201).send({ message: 'Items :  ', products }))
        .catch(err =>console.error(err))
    }
 

    
}

module.exports = ProductController