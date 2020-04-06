const db = require('../libs/db');
const type = db.Sequelize;


let tarefasModel = db.define('tarefas', {
    id:{
        type: type.INTEGER,
        primaryKey: true
    },
    Nome:type.STRING
});

module.exports = tarefasModel;