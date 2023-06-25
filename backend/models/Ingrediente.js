const Ingrediente = (sequelize,DataTypes) => {
    return sequelize.define('Ingrediente', {
        nome: DataTypes.STRING,
        unidade_medida: DataTypes.STRING,
        preco: DataTypes.DOUBLE
    },{
        tableName: 'Ingrediente'
    });
};

module.exports = Ingrediente;