const { Router } = require('express');
const { Produto } = require('../models'); // Ajuste o caminho para o seu arquivo de modelo

const router = Router();

router.get('/', async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (produto) {
            res.status(200).json(produto);
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produto', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        res.status(201).json({ message: 'Cadastrado com sucesso', produto });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar produto', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Produto.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: 'Excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir produto', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updated = await Produto.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated[0]) {
            res.status(200).json({ message: 'Atualizado com sucesso' });
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar produto', error });
    }
});

module.exports = router;
