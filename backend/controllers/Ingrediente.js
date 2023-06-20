const { Ingrediente } = require('../models'); 

const ingredienteController = {
    create: async (req, res) => {
        try {
            const ingrediente = await Ingrediente.create(req.body);
            res.status(201).json(ingrediente);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar ingrediente', error });
        }
    },
    getAll: async (req, res) => {
        try {
            const ingredientes = await Ingrediente.findAll();
            res.status(200).json(ingredientes);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar ingredientes', error });
        }
    },
    getById: async (req, res) => {
        try {
            const ingrediente = await Ingrediente.findByPk(req.params.id);
            if (ingrediente) {
                res.status(200).json(ingrediente);
            } else {
                res.status(404).json({ message: 'ingrediente não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar ingrediente', error });
        }
    },
    update: async (req, res) => {
        try {
            const updated = await Ingrediente.update(req.body, { where: { id: req.params.id } });
            if (updated[0]) {
                res.status(200).json({ message: 'ingrediente atualizado com sucesso' });
            } else {
                res.status(404).json({ message: 'ingrediente não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar ingrediente', error });
        }
    },
    delete: async (req, res) => {
        try {
            const deleted = await Ingrediente.destroy({ where: { id: req.params.id } });
            if (deleted) {
                res.status(200).json({ message: 'ingrediente deletado com sucesso' });
            } else {
                res.status(404).json({ message: 'ingrediente não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar ingrediente', error });
        }
    }
};

module.exports = ingredienteController;
