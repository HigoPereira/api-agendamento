const db = require('../database/db');

// LISTAR CLIENTES
exports.listar = (req, res) => {

    db.all(
        'SELECT * FROM clientes',
        [],
        (err, rows) => {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json(rows);

        }
    );

};

// CRIAR CLIENTE
exports.criar = (req, res) => {

    const { nome, telefone, email } = req.body;

    if (!nome || !telefone || !email) {
        return res.status(400).json({
            erro: 'Preencha todos os campos'
        });
    }

    db.run(
        'INSERT INTO clientes (nome, telefone, email) VALUES (?, ?, ?)',
        [nome, telefone, email],

        function(err) {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.status(201).json({
                mensagem: 'Cliente cadastrado com sucesso',
                cliente: {
                    id: this.lastID,
                    nome,
                    telefone,
                    email
                }
            });

        }
    );

};

// ATUALIZAR CLIENTE
exports.atualizar = (req, res) => {

    const { id } = req.params;
    const { nome, telefone, email } = req.body;

    db.run(
        `
        UPDATE clientes
        SET nome = ?, telefone = ?, email = ?
        WHERE id = ?
        `,
        [nome, telefone, email, id],

        function(err) {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json({
                mensagem: 'Cliente atualizado com sucesso',
                cliente: {
                    id,
                    nome,
                    telefone,
                    email
                }
            });

        }
    );

};

// REMOVER CLIENTE
exports.deletar = (req, res) => {

    const { id } = req.params;

    db.run(
        'DELETE FROM clientes WHERE id = ?',
        [id],

        function(err) {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json({
                mensagem: 'Cliente removido com sucesso'
            });

        }
    );

};