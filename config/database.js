const mongoose = require('mongoose');

/**
 * Função para gerenciar a conexão com o MongoDB.
 * Localizada em config/database.js para separar preocupações de infraestrutura.
 */
const connectDB = async () => {
    // URL de conexão com as credenciais do seu Docker
    const MONGO_URI = 'mongodb://mongo:0jQf2Yq0qK0o4D@72.61.219.52:27017/?tls=false';

    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ Conexão com MongoDB estabelecida com sucesso!');
    } catch (err) {
        console.error('❌ Erro ao conectar ao MongoDB:', err.message);

        // Em Docker, é vital garantir que o container da API e do Banco estejam na mesma rede
        console.info('Dica: Verifique se o container da API e o do Banco compartilham a mesma Docker Network.');

        process.exit(1);
    }
};

module.exports = connectDB;