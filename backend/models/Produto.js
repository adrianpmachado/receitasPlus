const Produto = (sequelize,DataTypes) => {
    return sequelize.define('Produto', {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        preco: DataTypes.FLOAT,
        usuario_id: DataTypes.INTEGER,
        receita_id: DataTypes.INTEGER
    },{
        tableName: 'Produto'
    });
};

module.exports = Produto;