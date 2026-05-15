const db = require('../database/db');

// CRIAR AGENDAMENTO
exports.criar = (req, res) => {

    const { cliente, servico, data } = req.body;

    if (!cliente || !servico || !data) {
        return res.status(400).json({
            erro: 'Preencha todos os campos'
        });
    }

    db.run(
        'INSERT INTO agendamentos (cliente, servico, data) VALUES (?, ?, ?)',
        [cliente, servico, data],

        function(err) {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.status(201).json({
                mensagem: 'Agendamento criado com sucesso',
                agendamento: {
                    id: this.lastID,
                    cliente,
                    servico,
                    data
                }
            });

        }
    );

};

// LISTAR AGENDAMENTOS
exports.listar = (req, res) => {

    db.all('SELECT * FROM agendamentos', [], (err, rows) => {

        if (err) {
            return res.status(500).json({
                erro: err.message
            });
        }

        res.json(rows);

    });

};

// DELETAR AGENDAMENTO
exports.deletar = (req, res) => {

    const { id } = req.params;

    db.run(
        'DELETE FROM agendamentos WHERE id = ?',
        [id],

        function(err) {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json({
                mensagem: 'Agendamento removido com sucesso'
            });

        }

    );

};

// ATUALIZAR AGENDAMENTO
exports.atualizar = (req, res) => {

    const { id } = req.params;
    const { cliente, servico, data } = req.body;

    db.run(
        `
        UPDATE agendamentos
        SET cliente = ?, servico = ?, data = ?
        WHERE id = ?
        `,
        [cliente, servico, data, id],

        function(err) {

            if (err) {
                return res.status(500).json({
                    erro: err.message
                });
            }

            res.json({
                mensagem: 'Agendamento atualizado com sucesso',
                agendamento: {
                    id,
                    cliente,
                    servico,
                    data
                }
            });

        }
    );

};