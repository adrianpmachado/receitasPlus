const { Router } = require('express');
const { ReceitaIngrediente } = require('../models'); // Ajuste o caminho para o seu arquivo de modelo

const router = Router();

router.get('/', async (req, res) => {
    try {
        const receitaIngredientes = await ReceitaIngrediente.findAll();
        res.status(200).json(receitaIngredientes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar receitaIngredientes', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const receitaIngrediente = await ReceitaIngrediente.findByPk(req.params.id);
        if (receitaIngrediente) {
            res.status(200).json(receitaIngrediente);
        } else {
            res.status(404).json({ message: 'ReceitaIngrediente não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar receitaIngrediente', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const receitaIngrediente = await ReceitaIngrediente.create(req.body);
        res.status(201).json({ message: 'Cadastrado com sucesso', receitaIngrediente });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar receitaIngrediente', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await ReceitaIngrediente.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: 'Excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir receitaIngrediente', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updated = await ReceitaIngrediente.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated[0]) {
            res.status(200).json({ message: 'Atualizado com sucesso' });
        } else {
            res.status(404).json({ message: 'ReceitaIngrediente não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar receitaIngrediente', error });
    }
});

module.exports = router;
