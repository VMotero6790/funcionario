var express = require('express');
var router = express.Router();
const homeController = require('../controller/homeController');
const funcionarioController = require('../controller/funcionarioController');

/* GET home page. */
router.get('/', homeController.index);

/* Rotas para criação de funcionários */
router.get('/funcionario', funcionarioController.index);

module.exports = router;
