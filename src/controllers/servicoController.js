const db = require('../database/db');

// LISTAR SERVIÇOS
exports.listar = (req, res) => {

    db.all('SELECT * FROM servicos', [], (err, rows) => {

        if (err) {
            return res.status(500).json({
                erro: err.message
            });
        }

        res.json(rows);

    });

};

// CRIAR SERVIÇO
exports.criar = (req, res) => {

    const { nome, preco } = req.body;

    if (!nome || !preco) {
        return res.status(400).json({
            erro: 'Preencha todos os campos'
        });
    }

    db.run(
        'INSERT INTO servicos (nome, preco) VALUES (?, ?)',
        [nome, preco],

        function(err) {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.status(201).json({
                mensagem: 'Serviço cadastrado com sucesso',
                servico: {
                    id: this.lastID,
                    nome,
                    preco
                }
            });

        }
    );

};

// ATUALIZAR SERVIÇO
exports.atualizar = (req, res) => {

    const { id } = req.params;
    const { nome, preco } = req.body;

    db.run(
        `
        UPDATE servicos
        SET nome = ?, preco = ?
        WHERE id = ?
        `,
        [nome, preco, id],

        function(err) {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json({
                mensagem: 'Serviço atualizado com sucesso',
                servico: {
                    id,
                    nome,
                    preco
                }
            });

        }
    );

};