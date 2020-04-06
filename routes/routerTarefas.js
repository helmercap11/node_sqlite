const router = require('../server.js').server;

router.get('/tarefas', (req, res, next) => {
    const Tarefas = [
        {
            id:1,
            nome: 'Limpar'
        }];
        res.send(200, Tarefas);
        next();
});

module.exports = router;