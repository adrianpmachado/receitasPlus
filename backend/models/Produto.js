const Produto = (sequelize,DataTypes) => {
    return sequelize.define('Produto', {
        nome: DataTypes.STRING,
        usuario_id: DataTypes.INTEGER,
    },{
        tableName: 'Produto'
    });
};

module.exports = Produto;