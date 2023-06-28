const express = require('express');
const controllers = require('./controllers'); 

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/usuarios', controllers.usuario); //ok
app.use('/receitas',controllers.receita) // ok 
app.use('/receitaIngredientes',controllers.receitaIngrediente) // ok 
app.use('/produtos',controllers.produto) // ok 
app.use('/producaoDiarias',controllers.ProducaoDiaria)//
app.use('/ingredientes',controllers.ingrediente)// ok
app.use('/custoOperacionais',controllers.custoOperacional) //ok

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
