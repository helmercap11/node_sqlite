const express = require('express');
var consign = require('consign');

const app = express();

// return json format
app.set('json spaces', 4);


consign()
.include('models')
.include("routes")
.into(app);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
})