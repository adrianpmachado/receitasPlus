const express = require('express');
const usuarioController = require('./controllers/Usuario');
const router = express.Router();


router.get('/', (req,res) => {
    return res.json({hello: 'mundo'});
})

router.post('/usuarios', usuarioController.create);
router.get('/usuarios', usuarioController.getAll);
router.get('/usuarios/:id', usuarioController.getById);
router.put('/usuarios/:id', usuarioController.update);
router.delete('/usuarios/:id', usuarioController.delete);

module.exports = router;
