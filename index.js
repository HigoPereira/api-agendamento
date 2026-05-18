require('dotenv').config();

require('./src/database/db');

const app = require('./src/app');

const PORT = process.env.PORT;

const agendamentoRoutes = require('./src/routes/agendamentoRoutes');

app.use('/agendamentos', agendamentoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});