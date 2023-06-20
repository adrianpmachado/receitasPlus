const { Produto } = require('../models'); 

const produtoController = {
    create: async (req, res) => {
        try {
            const produto = await Produto.create(req.body);
            res.status(201).json(produto);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar produto', error });
        }
    },
    getAll: async (req, res) => {
        try {
            const produtos = await Produto.findAll();
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar produtos', error });
        }
    },
    getById: async (req, res) => {
        try {
            const produto = await Produto.findByPk(req.params.id);
            if (produto) {
                res.status(200).json(produto);
            } else {
                res.status(404).json({ message: 'produto não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar produto', error });
        }
    },
    update: async (req, res) => {
        try {
            const updated = await Produto.update(req.body, { where: { id: req.params.id } });
            if (updated[0]) {
                res.status(200).json({ message: 'produto atualizado com sucesso' });
            } else {
                res.status(404).json({ message: 'produto não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar produto', error });
        }
    },
    delete: async (req, res) => {
        try {
            const deleted = await Produto.destroy({ where: { id: req.params.id } });
            if (deleted) {
                res.status(200).json({ message: 'produto deletado com sucesso' });
            } else {
                res.status(404).json({ message: 'produto não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar produto', error });
        }
    }
};

module.exports = produtoController;
