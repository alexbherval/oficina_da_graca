const Alistado = require('../models/Alistado');

/**
 * O Controller contém a lógica de negócio. 
 * Ele decide o que fazer com os dados recebidos.
 */
exports.criarAlistamento = async (req, res) => {
    try {
        const { nome, whatsapp, cep } = req.body;

        // Validação de negócio
        if (!nome || !whatsapp || !cep) {
            return res.status(400).json({
                message: "Houve um erro ao processar sua solicitação, tente novamente mais tarde ou envie um email para abherval@gmail.com"
            });
        }

        const novoAlistado = new Alistado(req.body);
        await novoAlistado.save();

        return res.status(200).json({
            message: "Afiliação Realizada com Sucesso!"
        });

    } catch (error) {
        console.error("Erro no Controller:", error);
        return res.status(500).json({
            message: "Houve um erro ao processar sua solicitação, tente novamente mais tarde ou envie um email para abherval@gmail.com"
        });
    }
};