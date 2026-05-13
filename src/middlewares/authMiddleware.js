const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            erro: 'Token não fornecido'
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        jwt.verify(token, 'segredo');
        next();
    } catch (error) {
        return res.status(401).json({
            erro: 'Token inválido'
        });
    }
};