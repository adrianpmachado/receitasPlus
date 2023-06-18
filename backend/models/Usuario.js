const Usuario = (sequelize,DataTypes) => {
    return sequelize.define('Usuatio', {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING
    });
};

module.exports = Usuario;