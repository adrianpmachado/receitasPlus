const { Router } = require('express');
const { ProducaoDiaria } = require('../models'); // Ajuste o caminho para o seu arquivo de modelo

const router = Router();

router.get('/', async (req, res) => {
    try {
        const producoesDiarias = await ProducaoDiaria.findAll();
        res.status(200).json(producoesDiarias);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produções diárias', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const producaoDiaria = await ProducaoDiaria.findByPk(req.params.id);
        if (producaoDiaria) {
            res.status(200).json(producaoDiaria);
        } else {
            res.status(404).json({ message: 'Produção diária não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produção diária', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const producaoDiaria = await ProducaoDiaria.create(req.body);
        res.status(201).json({ message: 'Cadastrado com sucesso', producaoDiaria });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar produção diária', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await ProducaoDiaria.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: 'Excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir produção diária', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updated = await ProducaoDiaria.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated[0]) {
            res.status(200).json({ message: 'Atualizado com sucesso' });
        } else {
            res.status(404).json({ message: 'Produção diária não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar produção diária', error });
    }
});

module.exports = router;
