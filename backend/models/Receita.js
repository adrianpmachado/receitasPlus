const Receita = (sequelize,DataTypes) => {
    return sequelize.define('Receita', {
        nome: DataTypes.STRING,
        tempo_preparo: DataTypes.STRING,
        rendimento: DataTypes.STRING,
        modo_preparo: DataTypes.STRING,
        lucro_esperado: DataTypes.DOUBLE
    });
};

module.exports = Receita;