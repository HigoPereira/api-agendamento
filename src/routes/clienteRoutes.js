const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const clienteController = require('../controllers/clienteController');

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.get(
    '/',
    authMiddleware,
    clienteController.listar
);

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               telefone:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 */
router.post(
    '/',
    authMiddleware,
    clienteController.criar
);

/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     summary: Atualiza um cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 */
router.put(
    '/:id',
    authMiddleware,
    clienteController.atualizar
);

/**
 * @swagger
 * /clientes/{id}:
 *   delete:
 *     summary: Remove um cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente removido com sucesso
 */
router.delete(
    '/:id',
    authMiddleware,
    clienteController.deletar
);

module.exports = router;