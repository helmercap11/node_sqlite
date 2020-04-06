const express = require('express');
var consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// return json format
app.set('json spaces', 4);


consign()
.include('models')
.include('controller')
.include("routes")
.into(app);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
})