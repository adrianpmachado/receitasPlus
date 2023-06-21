const { Router } = require('express');
const { Usuario } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuário', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        await Usuario.create({ nome, email, senha });
        res.status(200).json({ message: 'Cadastrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Usuario.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: 'Excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir usuário', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        await Usuario.update(
            { nome, email, senha },
            {
                where: { id: req.params.id },
            }
        );
        res.status(200).json({ message: 'Atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar usuário', error });
    }
});

module.exports = router;
