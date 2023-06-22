const express = require('express');
const controllers = require('./controllers'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/usuarios', controllers.usuario); //
app.use('/receitas',controllers.receita) //
app.use('/receitaIngredientes',controllers.receitaIngrediente) //
app.use('/produtos',controllers.produto) //
app.use('/producaoDiarias',controllers.ProducaoDiaria)//
app.use('/ingredientes',controllers.ingrediente)//
app.use('/custoOperacionais',controllers.custoOperacional)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
