const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');

const {
    listarAgendamentos,
    criarAgendamento,
    editarAgendamento,
    excluirAgendamento
} = require('../controllers/agendamentoController');

// LISTAR
router.get('/', authMiddleware, listarAgendamentos);

// CRIAR
router.post('/', authMiddleware, criarAgendamento);

// EDITAR
router.put('/:id', authMiddleware, editarAgendamento);

// EXCLUIR
router.delete('/:id', authMiddleware, excluirAgendamento);

module.exports = router;