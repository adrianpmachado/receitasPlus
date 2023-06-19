const CustoOperacional = (sequelize,DataTypes) => {
    return sequelize.define('CustoOperacional', {
        valor: DataTypes.FLOAT,
        usuario_id: DataTypes.INTEGER
    });
};

module.exports = CustoOperacional;