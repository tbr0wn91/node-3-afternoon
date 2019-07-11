require("dotenv").config();
const express = require('express');
const massive = require('massive');
const products_controller = require("./products_controller");
const app = express();

const { SERVER_PORT, CONNECTION_STRING} = process.env;
console.log(SERVER_PORT)
app.use(express.json());


massive(CONNECTION_STRING).then(dbInstance => {
   app.set('db', dbInstance); 

   console.log('database connected!')
}).catch(err => console.log(err));



app.get(`/api/products`, products_controller.getAll);

app.get(`/api/products/:id`, products_controller.getOne);

app.put(`/api/products/:id`, products_controller.update);

app.post(`/api/products`, products_controller.create);

app.delete(`/api/products/:id`, products_controller.delete);

















app.listen(SERVER_PORT,() => console.log(`listening on port ${SERVER_PORT} bruh!`))
