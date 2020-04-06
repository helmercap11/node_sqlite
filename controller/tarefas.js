const model = require('../models/tarefas.models.js');

function buscarTarefas(){
    return new Promise((resolve, reject) => {
        model.findAll().then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao buscar tarefas: ${err};`);
        })
    });
}


module.exports = {buscarTarefas};