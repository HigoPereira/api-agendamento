const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
const express = require('express');
const cors = require('cors');


const app = express();

// middlewares globais
app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// rotas
const authRoutes = require('./routes/authRoutes');
const servicoRoutes = require('./routes/servicoRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');

app.use('/auth', authRoutes);
app.use('/servicos', servicoRoutes);
app.use('/agendamentos', agendamentoRoutes);
app.use('/clientes', clienteRoutes);

// rota teste
app.get('/', (req, res) => {
    res.send('API funcionando 🚀');
});

module.exports = app;