const express = require('express');
const controllers = require('./controllers'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/usuarios', controllers.usuario); //
app.use('/receita',controllers.receita) //
app.use('./receitaIngrediente',controllers.receitaIngrediente) //
app.use('./produto',controllers.produto) //
app.use('./producaoDiaria',controllers.ProducaoDiaria)//
app.use('./ingredientes',controllers.ingrediente)//
app.use('./custoOperacional',controllers.custoOperacional)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
