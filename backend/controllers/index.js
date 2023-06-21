const { request } = require('express');


const UsuarioController =require('./Usuario');
const CustoOperacionalController = require('./CustoOperacional')
const ReceitaController = require('./Receita')
const IngredienteController = require('./Ingrediente')
const ProducaoDiariaController = require('./ProducaoDiaria')
const ProdutoController = require('./Produto')
const ReceitaIngredienteController = require('./ReceitaIngrediente')


module.exports = {
    usuario: UsuarioController,
    custoOperacional: CustoOperacionalController,
    receita:ReceitaController,
    ingrediente:IngredienteController,
    ProducaoDiaria:ProducaoDiariaController,
    produto:ProdutoController,
    receitaIngrediente:ReceitaIngredienteController
};