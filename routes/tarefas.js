const mod = '../models';

const Tarefas = require("../models/tarefas.models");

module.exports = (app) => {

   
   app.get('/tarefas', Tarefas.list);

    /* var Tarefas = app.models.tarefas;
    app.get('/tarefas', (req, res) => {
        Tarefas.findAll({}, (tarefas) => {
            res.json(tarefas - tarefas);
        });
    });*/
    
    
};