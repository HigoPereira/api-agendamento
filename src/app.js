const express = require('express');
const cors = require('cors');

const app = express();

// middlewares globais
app.use(express.json());
app.use(cors());

// rotas
const authRoutes = require('./routes/authRoutes');
const servicoRoutes = require('./routes/servicoRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes');

app.use('/auth', authRoutes);
app.use('/servicos', servicoRoutes);
app.use('/agendamentos', agendamentoRoutes);

// rota teste
app.get('/', (req, res) => {
    res.send('API funcionando 🚀');
});

// iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});