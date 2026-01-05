const Alistado = require('../models/Alistado');

const verificarDuplicidade = async (req, res, next) => {
    try {
        const { nome, whatsapp } = req.body;

        const membroExistente = await Alistado.findOne({
            nome: nome,
            whatsapp: whatsapp
        });

        if (membroExistente) {
            return res.status(409).json({
                message: "Atenção: Você já está alistado com este nome e telefone!"
            });
        }

        next();
    } catch (error) {
        console.error("Erro no middleware:", error);
        return res.status(500).json({ message: "Erro interno." });
    }
};

// EXPORTE ASSIM:
module.exports = verificarDuplicidade;