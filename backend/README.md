# Checklist de Models para o Sistema

## Usuario
- [ ] id: Integer
- [ ] nome: String
- [ ] email: String
- [ ] senha: String

## Produto
- [ ] id: Integer
- [ ] nome: String
- [ ] usuario_id: Integer (Foreign Key)

## ReceitaIngrediente
- [ ] Receita_id: Integer (Foreign Key)
- [ ] ingrediente_id: Integer (Foreign Key)
- [ ] quantidade: Integer

## ProducaoDiaria
- [ ] id: Integer
- [ ] produto_id: Integer (Foreign Key)
- [ ] quantidade: Integer
- [ ] data: Date

## Receita
- [ ] id: Integer
- [ ] nome: String
- [ ] produto_id: Integer (Foreign Key)
- [ ] tempo_preparo: String
- [ ] rendimento: String
- [ ] modo_preparo: String
- [ ] lucro_esperado: Double

## CustoOperacional
- [ ] id: Integer
- [ ] valor: Float
- [ ] usuario_id: Integer (Foreign Key)

## Ingrediente
- [ ] id: Integer
- [ ] nome: String
- [ ] unidade_medida: String
- [ ] preço: Double

---

# Checklist de Controllers para o Sistema

## UsuarioController
- [ ] criarUsuario()
- [ ] lerUsuario()
- [ ] atualizarUsuario()
- [ ] deletarUsuario()

## ProdutoController
- [ ] criarProduto()
- [ ] lerProduto()
- [ ] atualizarProduto()
- [ ] deletarProduto()

## ReceitaIngredienteController
- [ ] criarReceitaIngrediente()
- [ ] lerReceitaIngrediente()
- [ ] atualizarReceitaIngrediente()
- [ ] deletarReceitaIngrediente()

## ProducaoDiariaController
- [ ] criarProducaoDiaria()
- [ ] lerProducaoDiaria()
- [ ] atualizarProducaoDiaria()
- [ ] deletarProducaoDiaria()

## ReceitaController
- [ ] criarReceita()
- [ ] lerReceita()
- [ ] atualizarReceita()
- [ ] deletarReceita()

## CustoOperacionalController
- [ ] criarCustoOperacional()
- [ ] lerCustoOperacional()
- [ ] atualizarCustoOperacional()
- [ ] deletarCustoOperacional()

## IngredienteController
- [ ] criarIngrediente()
- [ ] lerIngrediente()
- [ ] atualizarIngrediente()
- [ ] deletarIngrediente()
---
# Checklist de CRUD para o Sistema

## Usuario
- [ ] Criar Usuario (POST /usuarios)
- [ ] Ler Usuario (GET /usuarios/{id})
- [ ] Atualizar Usuario (PUT /usuarios/{id})
- [ ] Deletar Usuario (DELETE /usuarios/{id})

## Produto
- [ ] Criar Produto (POST /produtos)
- [ ] Ler Produto (GET /produtos/{id})
- [ ] Atualizar Produto (PUT /produtos/{id})
- [ ] Deletar Produto (DELETE /produtos/{id})

## ReceitaIngrediente
- [ ] Criar ReceitaIngrediente (POST /receitaingredientes)
- [ ] Ler ReceitaIngrediente (GET /receitaingredientes/{id})
- [ ] Atualizar ReceitaIngrediente (PUT /receitaingredientes/{id})
- [ ] Deletar ReceitaIngrediente (DELETE /receitaingredientes/{id})

## ProducaoDiaria
- [ ] Criar ProducaoDiaria (POST /producaodiarias)
- [ ] Ler ProducaoDiaria (GET /producaodiarias/{id})
- [ ] Atualizar ProducaoDiaria (PUT /producaodiarias/{id})
- [ ] Deletar ProducaoDiaria (DELETE /producaodiarias/{id})

## Receita
- [ ] Criar Receita (POST /receitas)
- [ ] Ler Receita (GET /receitas/{id})
- [ ] Atualizar Receita (PUT /receitas/{id})
- [ ] Deletar Receita (DELETE /receitas/{id})

## CustoOperacional
- [ ] Criar CustoOperacional (POST /custosoperacionais)
- [ ] Ler CustoOperacional (GET /custosoperacionais/{id})
- [ ] Atualizar CustoOperacional (PUT /custosoperacionais/{id})
- [ ] Deletar CustoOperacional (DELETE /custosoperacionais/{id})

## Ingrediente
- [ ] Criar Ingrediente (POST /ingredientes)
- [ ] Ler Ingrediente (GET /ingredientes/{id})
- [ ] Atualizar Ingrediente (PUT /ingredientes/{id})
- [ ] Deletar Ingrediente (DELETE /ingredientes/{id})