const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const { usuario, senha } = req.body;

    if (usuario === 'admin' && senha === '123') {
        const token = jwt.sign(
            { usuario },
           process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.json({ token });
    }

    return res.status(401).json({ erro: 'Credenciais inválidas' });
};