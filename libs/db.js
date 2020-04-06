const Sequelize = require('sequelize');

const sequelize = new Sequelize('com', 'root','123456789', {
    host:"localhost",
    port:3307,
    dialect:'sqlite3"',
    define:{
        timestamps: false
    }
});


module.exports = sequelize;