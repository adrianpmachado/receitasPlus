'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [
      {
        id: 1,
        nome: 'John Doe',
        email: 'john.doe@example.com',
        senha: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        nome: 'Jane Smith',
        email: 'jane.smith@example.com',
        senha: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        nome: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        senha: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
