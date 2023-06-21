const Usuario = (sequelize,DataTypes) => {
    return sequelize.define('Usuario', {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING
    });
};

module.exports = Usuario;