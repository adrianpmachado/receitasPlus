const Receitas = (sequelize,DataTypes) => {
    return sequelize.define('Receitas', {
        nome: DataTypes.STRING,
        produto_id: DataTypes.INTEGER,
        tempo_preparo: DataTypes.STRING,
        rendimento: DataTypes.STRING,
        modo_preparo: DataTypes.STRING,
        lucro_esperado: DataTypes.DOUBLE
    });
};

module.exports = ProducaoDiaria;