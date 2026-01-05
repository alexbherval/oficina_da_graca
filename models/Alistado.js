const mongoose = require('mongoose');

/**
 * O Model representa a estrutura dos dados e a interface com o Banco.
 */
const AlistadoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O nome é obrigatório'],
        trim: true
    },
    whatsapp: {
        type: String,
        required: [true, 'O WhatsApp é obrigatório']
    },
    cep: {
        type: String,
        required: [true, 'O CEP é obrigatório']
    },
    rua: String,
    bairro: String,
    numero: String,
    complemento: String,
    dataAlistamento: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Alistado', AlistadoSchema);