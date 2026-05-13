const agendamentos = require('../data/database');

// LISTAR AGENDAMENTOS
exports.listarAgendamentos = (req, res) => {
    res.json(agendamentos);
};

// CRIAR AGENDAMENTO
exports.criarAgendamento = (req, res) => {
    const novoAgendamento = {
        id: agendamentos.length + 1,
        nome: req.body.nome,
        servico: req.body.servico,
        horario: req.body.horario
    };

    agendamentos.push(novoAgendamento);

    res.status(201).json({
        mensagem: 'Agendamento criado com sucesso!',
        agendamento: novoAgendamento
    });
};

// EDITAR AGENDAMENTO
exports.editarAgendamento = (req, res) => {
    const id = parseInt(req.params.id);

    const agendamento = agendamentos.find(a => a.id === id);

    if (!agendamento) {
        return res.status(404).json({
            erro: 'Agendamento não encontrado'
        });
    }

    agendamento.nome = req.body.nome || agendamento.nome;
    agendamento.servico = req.body.servico || agendamento.servico;
    agendamento.horario = req.body.horario || agendamento.horario;

    res.json({
        mensagem: 'Agendamento atualizado com sucesso!',
        agendamento
    });
};

// EXCLUIR AGENDAMENTO
exports.excluirAgendamento = (req, res) => {
    const id = parseInt(req.params.id);

    const index = agendamentos.findIndex(a => a.id === id);

    if (index === -1) {
        return res.status(404).json({
            erro: 'Agendamento não encontrado'
        });
    }

    agendamentos.splice(index, 1);

    res.json({
        mensagem: 'Agendamento removido com sucesso!'
    });
};