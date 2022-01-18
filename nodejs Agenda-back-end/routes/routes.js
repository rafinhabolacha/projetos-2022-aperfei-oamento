const express = require('express');
const routes = express.Router();
const Usuario = require('../controller/usuariosController');

routes.post('/',Usuario.create);
routes.get('/listar',Usuario.listar);
routes.get('/usuario/:id',Usuario.listar_uma_pessoa);
routes.put('/usuario',Usuario.atualizar);
routes.delete('/usuario/:id',Usuario.Apagar);

module.exports = routes;

