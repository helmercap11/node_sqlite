module.exports = list => {
    return {
        findAll: (params, callback) =>{
            return callback([
                {title: "Fazer compras"},
                {title: "Arranjar o pc"},
            ]);
        }
    };
};