const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const servicoController = require('../controllers/servicoController');

/**
 * @swagger
 * /servicos:
 *   get:
 *     summary: Lista todos os serviços
 *     tags: [Serviços]
 *     responses:
 *       200:
 *         description: Lista de serviços
 */

// LISTAR SERVIÇOS
router.get(
    '/',
    authMiddleware,
    servicoController.listar
);

/**
 * @swagger
 * /servicos:
 *   post:
 *     summary: Cria um novo serviço
 *     tags: [Serviços]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *     responses:
 *       201:
 *         description: Serviço criado com sucesso
 */

// CRIAR SERVIÇO
router.post(
    '/',
    authMiddleware,
    servicoController.criar
);

/**
 * @swagger
 * /servicos/{id}:
 *   put:
 *     summary: Atualiza um serviço
 *     tags: [Serviços]
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
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *     responses:
 *       200:
 *         description: Serviço atualizado com sucesso
 */

// ATUALIZAR SERVIÇO
router.put(
    '/:id',
    authMiddleware,
    servicoController.atualizar
);

/**
 * @swagger
 * /servicos/{id}:
 *   delete:
 *     summary: Remove um serviço
 *     tags: [Serviços]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Serviço removido com sucesso
 */

// REMOVER SERVIÇO
router.delete(
    '/:id',
    authMiddleware,
    servicoController.deletar
);

module.exports = router;