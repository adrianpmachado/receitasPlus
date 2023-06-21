const { Router } = require('express');
const { CustoOperacional } = require('../models'); // Ajuste o caminho para o seu arquivo de modelo

const router = Router();

router.get('/', async (req, res) => {
    try {
        const custoOperacionals = await CustoOperacional.findAll();
        res.status(200).json(custoOperacionals);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar custo operacionais', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const custoOperacional = await CustoOperacional.findByPk(req.params.id);
        if (custoOperacional) {
            res.status(200).json(custoOperacional);
        } else {
            res.status(404).json({ message: 'Custo operacional não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar custo operacional', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const custoOperacional = await CustoOperacional.create(req.body);
        res.status(201).json({ message: 'Cadastrado com sucesso', custoOperacional });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar custo operacional', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await CustoOperacional.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: 'Excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir custo operacional', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updated = await CustoOperacional.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated[0]) {
            res.status(200).json({ message: 'Atualizado com sucesso' });
        } else {
            res.status(404).json({ message: 'Custo operacional não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar custo operacional', error });
    }
});

module.exports = router;
