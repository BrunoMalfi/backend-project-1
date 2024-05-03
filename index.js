const express = require('express');
const app = express();
const PORT = 3000

app.use(express.json())

app.use('/products', require('./routes/products.js'));
app.use('/categories', require('./routes/categories.js'));

app.listen(PORT, () => console.log('Servidor levantado en el puerto ' + PORT))



//sequelize model:generate --name Category --attributes name:string
//sequelize model:generate --name CategoryProduct --attributes CategoryId:integer,ProductId:integer