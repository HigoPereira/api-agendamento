const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, (req, res) => {
    res.json([
        {
            id: 1,
            nome: 'Corte de cabelo',
            preco: 30
        },
        {
            id: 2,
            nome: 'Barba',
            preco: 20
        }
    ]);
});

module.exports = router;