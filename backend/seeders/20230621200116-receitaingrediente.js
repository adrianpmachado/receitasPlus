'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ReceitaIngredientes', [
      { receitaId: 1, ingredienteId: 1, quantidade: 100, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 1, ingredienteId: 2, quantidade: 100, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 1, ingredienteId: 9, quantidade: 200, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 1, ingredienteId: 10, quantidade: 50, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 1, ingredienteId: 12, quantidade: 10, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 2, ingredienteId: 1, quantidade: 100, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 2, ingredienteId: 2, quantidade: 100, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 2, ingredienteId: 9, quantidade: 200, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 2, ingredienteId: 10, quantidade: 50, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 2, ingredienteId: 13, quantidade: 10, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 3, ingredienteId: 7, quantidade: 200, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 3, ingredienteId: 11, quantidade: 50, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 3, ingredienteId: 14, quantidade: 10, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 4, ingredienteId: 1, quantidade: 100, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 4, ingredienteId: 2, quantidade: 100, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 4, ingredienteId: 9, quantidade: 200, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 4, ingredienteId: 10, quantidade: 50, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 4, ingredienteId: 19, quantidade: 10, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 4, ingredienteId: 20, quantidade: 10, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 5, ingredienteId: 7, quantidade: 200, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 5, ingredienteId: 11, quantidade: 50, createdAt: new Date(), updatedAt: new Date() },
      { receitaId: 5, ingredienteId: 24, quantidade: 10, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ReceitaIngredientes', null, {});
  }
};
