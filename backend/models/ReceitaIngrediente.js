const ReceitaIngrediente = (sequelize,DataTypes) => {
    return sequelize.define('ReceitaIngrediente', {
        receita_id: DataTypes.INTEGER,
        ingrediente_id: DataTypes.INTEGER,
        quantidade: DataTypes.INTEGER,
    },{
        tableName: 'ReceitaIngrediente'
    });
};

module.exports = ReceitaIngrediente;