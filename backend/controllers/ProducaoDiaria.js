const { ProducaoDiaria } = require('../models'); 

const producaoDiariaController = {
    create: async (req, res) => {
        try {
            const producaoDiaria = await ProducaoDiaria.create(req.body);
            res.status(201).json(producaoDiaria);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar producao diaria', error });
        }
    },
    getAll: async (req, res) => {
        try {
            const producoesDiarias = await ProducaoDiaria.findAll();
            res.status(200).json(producoesDiarias);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar producoes diarias', error });
        }
    },
    getById: async (req, res) => {
        try {
            const producaoDiaria = await ProducaoDiaria.findByPk(req.params.id);
            if (producaoDiaria) {
                res.status(200).json(producaoDiaria);
            } else {
                res.status(404).json({ message: 'usuario não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar producao diaria', error });
        }
    },
    update: async (req, res) => {
        try {
            const updated = await ProducaoDiaria.update(req.body, { where: { id: req.params.id } });
            if (updated[0]) {
                res.status(200).json({ message: 'usuario atualizado com sucesso' });
            } else {
                res.status(404).json({ message: 'usuario não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar producao diaria', error });
        }
    },
    delete: async (req, res) => {
        try {
            const deleted = await ProducaoDiaria.destroy({ where: { id: req.params.id } });
            if (deleted) {
                res.status(200).json({ message: 'usuario deletado com sucesso' });
            } else {
                res.status(404).json({ message: 'usuario não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar producao diaria', error });
        }
    }
};

module.exports = producaoDiariaController;
