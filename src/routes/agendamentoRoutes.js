const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');

const agendamentoController = require('../controllers/agendamentoController');

/**
 * @swagger
 * /agendamentos:
 *   get:
 *     summary: Lista todos os agendamentos
 *     tags: [Agendamentos]
 *     responses:
 *       200:
 *         description: Lista de agendamentos
 */

router.get('/', authMiddleware, agendamentoController.listar);

/**
 * @swagger
 * /agendamentos:
 *   post:
 *     summary: Cria um novo agendamento
 *     tags: [Agendamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cliente:
 *                 type: string
 *               servico:
 *                 type: string
 *               data:
 *                 type: string
 *     responses:
 *       201:
 *         description: Agendamento criado com sucesso
 */

router.post('/', authMiddleware, agendamentoController.criar);

/**
 * @swagger
 * /agendamentos/{id}:
 *   delete:
 *     summary: Remove um agendamento
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Agendamento removido com sucesso
 */

router.delete('/:id', authMiddleware, agendamentoController.deletar);

/**
 * @swagger
 * /agendamentos/{id}:
 *   put:
 *     summary: Atualiza um agendamento
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cliente:
 *                 type: string
 *               servico:
 *                 type: string
 *               data:
 *                 type: string
 *     responses:
 *       200:
 *         description: Agendamento atualizado com sucesso
 */

// ATUALIZAR AGENDAMENTO
router.put(
    '/:id',
    authMiddleware,
    agendamentoController.atualizar
);

module.exports = router;