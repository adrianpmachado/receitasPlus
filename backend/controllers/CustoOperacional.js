const { CustoOperacional } = require('../models'); 

const custoOperacionalController = {
    create: async (req, res) => {
        try {
            const custoOperacional = await CustoOperacional.create(req.body);
            res.status(201).json(custoOperacional);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar custo operacionais', error });
        }
    },
    getAll: async (req, res) => {
        try {
            const custoOperacionals = await CustoOperacional.findAll();
            res.status(200).json(custoOperacionals);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar custo operacionais', error });
        }
    },
    getById: async (req, res) => {
        try {
            const custoOperacional = await CustoOperacional.findByPk(req.params.id);
            if (custoOperacional) {
                res.status(200).json(custoOperacional);
            } else {
                res.status(404).json({ message: 'custo operacional não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar custo operacionais', error });
        }
    },
    update: async (req, res) => {
        try {
            const updated = await CustoOperacional.update(req.body, { where: { id: req.params.id } });
            if (updated[0]) {
                res.status(200).json({ message: 'custo operacional atualizado com sucesso' });
            } else {
                res.status(404).json({ message: 'custo operacional não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar custo operacionais', error });
        }
    },
    delete: async (req, res) => {
        try {
            const deleted = await CustoOperacional.destroy({ where: { id: req.params.id } });
            if (deleted) {
                res.status(200).json({ message: 'custo operacional deletado com sucesso' });
            } else {
                res.status(404).json({ message: 'custo operacional não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar custo operacionais', error });
        }
    }
};

module.exports = custoOperacionalController;
