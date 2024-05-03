const { Category,Sequelize,Product} = require('../models/index.js');
const { Op } = Sequelize;

const CategoryController = {
    create(req, res) {
        req.body.role = "category";
        Category.create(req.body)
            .then(category => res.status(201).send({ message: 'Successful category created ', category }))
            .catch(err =>console.error(err))
    },
    update(req,res){
        Category.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
            .then(category => res.status(201).send({ message: 'Successful category updated ', category }))
            .catch(err =>console.error(err))

    },
    delete(req, res) {
        let categoryToDelete;
        Category.findByPk(req.params.id).
        then((category) => {
            categoryToDelete = category
            Category.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => res.status(201).send({ message: 'Deleted Category :', categoryToDelete}))
            .catch(err =>console.error(err))
        })
        .catch(err =>console.error(err))

    },
    showAllCategories(req,res){
        const categories = Category.findAll({
            include: [{ model: Product,through: { attributes: [] } }],
          })
          .then(categories => res.status(201).send({ message: 'Categories :  ', categories }))
          .catch(err =>console.error(err))
    
    },
    getCategoryById(req,res){
        Category.findByPk(req.params.id)
        .then(category => res.status(201).send({ message: 'Category :  ', category }))
        .catch(err =>console.error(err))
    },
    getCategoryByName(req,res){
        Category.findAll({
            where: {
                name: {
                    [Op.like]: `%${req.params.name}%`
                }
            }
        })
        .then(category => res.status(201).send({ message: 'Category :  ', category }))
        .catch(err =>console.error(err))
    }
}

module.exports = CategoryController