const express = require('express');
const app = express();
const PORT = 3000

app.use(express.json())

app.use('/products', require('./routes/products.js'));
app.use('/categories', require('./routes/categories.js'));
app.use('/users', require('./routes/users.js'));
app.use('/orders', require('./routes/orders.js'));

app.listen(PORT, () => console.log('Servidor levantado en el puerto ' + PORT))


//sequelize model:generate --name User --attributes name:string,eMail:string,password:string
//sequelize model:generate --name Order --attributes UserId:integer,orderStatus:string,dlvDate:DATE
//sequelize model:generate --name OrderProduct --attributes OrderId:integer,ProductId:integer
//sequelize model:generate --name Token --attributes token:string,UserId:integer
//sequelize db:migrate
