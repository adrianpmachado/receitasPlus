const { ReceitaIngrediente } = require('../models'); 

const receitaIngredienteController = {
    create: async (req, res) => {
        try {
            const receitaIngrediente = await ReceitaIngrediente.create(req.body);
            res.status(201).json(receitaIngrediente);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar receitaIngrediente', error });
        }
    },
    getAll: async (req, res) => {
        try {
            const receitaIngredientes = await ReceitaIngrediente.findAll();
            res.status(200).json(receitaIngredientes);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar receitaIngredientes', error });
        }
    },
    getById: async (req, res) => {
        try {
            const receitaIngrediente = await ReceitaIngrediente.findByPk(req.params.id);
            if (receitaIngrediente) {
                res.status(200).json(receitaIngrediente);
            } else {
                res.status(404).json({ message: 'receitaIngrediente não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar receitaIngrediente', error });
        }
    },
    update: async (req, res) => {
        try {
            const updated = await ReceitaIngrediente.update(req.body, { where: { id: req.params.id } });
            if (updated[0]) {
                res.status(200).json({ message: 'receitaIngrediente atualizado com sucesso' });
            } else {
                res.status(404).json({ message: 'receitaIngrediente não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar receitaIngrediente', error });
        }
    },
    delete: async (req, res) => {
        try {
            const deleted = await ReceitaIngrediente.destroy({ where: { id: req.params.id } });
            if (deleted) {
                res.status(200).json({ message: 'receitaIngrediente deletado com sucesso' });
            } else {
                res.status(404).json({ message: 'receitaIngrediente não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar receitaIngrediente', error });
        }
    }
};

module.exports = receitaIngredienteController;
