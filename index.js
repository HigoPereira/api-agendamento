require('./src/database/db');

const app = require('./src/app');

const PORT = 3000;

const agendamentoRoutes = require('./src/routes/agendamentoRoutes');

app.use('/agendamentos', agendamentoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});