const { Router } = require('express');
const { Receita } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const receitas = await Receita.findAll();
        res.status(200).json(receitas);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar receitas', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const receita = await Receita.findByPk(req.params.id);
        if (receita) {
            res.status(200).json(receita);
        } else {
            res.status(404).json({ message: 'Receita não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar receita', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const receita = await Receita.create(req.body);
        res.status(201).json({ message: 'Cadastrado com sucesso', receita });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar receita', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Receita.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: 'Excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir receita', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updated = await Receita.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated[0]) {
            res.status(200).json({ message: 'Atualizado com sucesso' });
        } else {
            res.status(404).json({ message: 'Receita não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar receita', error });
    }
});

module.exports = router;
