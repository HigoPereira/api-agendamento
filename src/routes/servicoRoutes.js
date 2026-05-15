const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const servicoController = require('../controllers/servicoController');

// LISTAR SERVIÇOS
router.get(
    '/',
    authMiddleware,
    servicoController.listar
);

// CRIAR SERVIÇO
router.post(
    '/',
    authMiddleware,
    servicoController.criar
);

// ATUALIZAR SERVIÇO
router.put(
    '/:id',
    authMiddleware,
    servicoController.atualizar
);

module.exports = router;