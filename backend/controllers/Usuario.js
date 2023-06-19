const { Usuario } = require('../models'); 

const usuarioController = {
    create: async (req, res) => {
        try {
            const usuario = await Usuario.create(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar usuário', error });
        }
    },
    getAll: async (req, res) => {
        try {
            const usuarios = await Usuario.findAll();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar usuários', error });
        }
    },
    getById: async (req, res) => {
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
    },
    update: async (req, res) => {
        try {
            const updated = await Usuario.update(req.body, { where: { id: req.params.id } });
            if (updated[0]) {
                res.status(200).json({ message: 'Usuário atualizado com sucesso' });
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar usuário', error });
        }
    },
    delete: async (req, res) => {
        try {
            const deleted = await Usuario.destroy({ where: { id: req.params.id } });
            if (deleted) {
                res.status(200).json({ message: 'Usuário deletado com sucesso' });
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar usuário', error });
        }
    }
};

module.exports = usuarioController;
