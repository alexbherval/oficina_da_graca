const express = require('express');
const router = express.Router();
const alistamentoController = require('../controllers/alistamentoController');

// IMPORTAÇÃO CORRETA:
const checkMember = require('../Middleware/checkMember');

// Verifique se checkMember não está vindo vazio
if (typeof checkMember !== 'function') {
    console.error('ERRO: checkMember não é uma função! Verifique o module.exports no arquivo.');
}

/**
 * Rota POST
 */

router.post('/', checkMember, alistamentoController.criarAlistamento);

module.exports = router;