const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const alistamentoRoutes = require('./routes/alistamentoRoutes');

/**
 * Inicialização do Servidor Express
 * O server.js actua como o "orquestrador" da aplicação.
 */
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Conexão com o Base de Dados (MongoDB via Docker)
connectDB();

// 2. Middlewares Globais
// Permite que o servidor receba requisições de origens diferentes (CORS)
app.use(cors());
// Analisa o corpo das requisições como JSON
app.use(express.json());

// 3. Definição de Rotas
/**
 * Centralizamos as rotas de alistamento sob o prefixo /v1.
 * Isso ajuda no versionamento futuro da API.
 */
app.use('/v1/alistamento', alistamentoRoutes);

// 4. Tratamento de Rotas Inexistentes (404)
app.use((req, res) => {
    res.status(404).json({ message: "Rota não encontrada." });
});

// 5. Inicialização
app.listen(PORT, () => {
    console.log(`🚀 Servidor da Oficina da Graça a correr na porta ${PORT}`);
    console.log(`📡 Endpoint de Alistamento: http://localhost:${PORT}/v1/alistamento`);
});