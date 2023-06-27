const Receita = (sequelize,DataTypes) => {
    return sequelize.define('Receita', {
        nome: DataTypes.STRING,
        tempo_preparo: DataTypes.STRING,
        rendimento: DataTypes.STRING,
        usuarioId: DataTypes.INTEGER,
        modo_preparo: DataTypes.STRING,
        lucro_esperado: DataTypes.DOUBLE
    },{
        tableName: 'Receita'
    });
};

module.exports = Receita;