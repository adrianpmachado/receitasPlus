const { Router } = require('express');
const { Ingrediente } = require('../models'); // Ajuste o caminho para o seu arquivo de modelo

const router = Router();

router.get('/', async (req, res) => {
    try {
        const ingredientes = await Ingrediente.findAll();
        res.status(200).json(ingredientes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar ingredientes', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const ingrediente = await Ingrediente.findByPk(req.params.id);
        if (ingrediente) {
            res.status(200).json(ingrediente);
        } else {
            res.status(404).json({ message: 'Ingrediente não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar ingrediente', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const ingrediente = await Ingrediente.create(req.body);
        res.status(201).json({ message: 'Cadastrado com sucesso', ingrediente });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar ingrediente', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Ingrediente.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: 'Excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir ingrediente', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updated = await Ingrediente.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated[0]) {
            res.status(200).json({ message: 'Atualizado com sucesso' });
        } else {
            res.status(404).json({ message: 'Ingrediente não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar ingrediente', error });
    }
});

module.exports = router;
