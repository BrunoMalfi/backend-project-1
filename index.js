const express = require('express');
const app = express();
const { typeError } = require('./middleware/errors.js');
const PORT = 3000

app.use(express.json())

app.use('/products', require('./routes/products.js'));
app.use('/categories', require('./routes/categories.js'));
app.use('/users', require('./routes/users.js'));
app.use('/orders', require('./routes/orders.js'));

app.use(typeError)

app.listen(PORT, () => console.log('Listening  on port : ' + PORT))


//sequelize model:generate --name User --attributes name:string,eMail:string,password:string
//sequelize model:generate --name Order --attributes UserId:integer,orderStatus:string,dlvDate:DATE
//sequelize model:generate --name OrderProduct --attributes OrderId:integer,ProductId:integer
//sequelize model:generate --name Token --attributes token:string,UserId:integer
//sequelize db:migrate
//sequelize seed:generate --name demo-product
//sequelize migration:create --name updatesInUserTable
//npm i multer 
