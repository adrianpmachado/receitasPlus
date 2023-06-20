const { Receita } = require('../models'); 

const receitaController = {
    create: async (req, res) => {
        try {
            const receita = await Receita.create(req.body);
            res.status(201).json(receita);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar receita', error });
        }
    },
    getAll: async (req, res) => {
        try {
            const receitas = await Receita.findAll();
            res.status(200).json(receitas);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar receitas', error });
        }
    },
    getById: async (req, res) => {
        try {
            const receita = await Receita.findByPk(req.params.id);
            if (receita) {
                res.status(200).json(receita);
            } else {
                res.status(404).json({ message: 'receita não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar receita', error });
        }
    },
    update: async (req, res) => {
        try {
            const updated = await Receita.update(req.body, { where: { id: req.params.id } });
            if (updated[0]) {
                res.status(200).json({ message: 'receita atualizado com sucesso' });
            } else {
                res.status(404).json({ message: 'receita não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar receita', error });
        }
    },
    delete: async (req, res) => {
        try {
            const deleted = await Receita.destroy({ where: { id: req.params.id } });
            if (deleted) {
                res.status(200).json({ message: 'receita deletado com sucesso' });
            } else {
                res.status(404).json({ message: 'receita não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar receita', error });
        }
    }
};

module.exports = receitaController;
