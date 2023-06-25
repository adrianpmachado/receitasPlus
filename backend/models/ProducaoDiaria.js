const ProducaoDiaria = (sequelize,DataTypes) => {
    return sequelize.define('ProducaoDiaria', {
        produto_id: DataTypes.INTEGER,
        quantidade: DataTypes.INTEGER,
        data: DataTypes.DATE
    }),{
        tableName: 'ProducaoDiaria'
    };
};

module.exports = ProducaoDiaria;