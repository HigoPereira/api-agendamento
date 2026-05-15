const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');

const agendamentoController = require('../controllers/agendamentoController');

router.get('/', authMiddleware, agendamentoController.listar);

router.post('/', authMiddleware, agendamentoController.criar);

router.delete('/:id', authMiddleware, agendamentoController.deletar);

// ATUALIZAR AGENDAMENTO
router.put(
    '/:id',
    authMiddleware,
    agendamentoController.atualizar
);

module.exports = router;