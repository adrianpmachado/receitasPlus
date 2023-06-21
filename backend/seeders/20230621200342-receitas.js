'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Receitas', [
      {
        id: 1,
        nome: 'Receita de Sabonete de Lavanda',
        produtoId: 1,
        tempo_preparo: '30 minutos',
        rendimento: '1 barra',
        modo_preparo: 'Derreta a base glicerinada, adicione a essência e o corante, mexa bem e despeje na forma.',
        lucro_esperado: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        nome: 'Receita de Sabonete de Camomila',
        produtoId: 2,
        tempo_preparo: '30 minutos',
        rendimento: '1 barra',
        modo_preparo: 'Derreta a base glicerinada, adicione a essência e o corante, mexa bem e despeje na forma.',
        lucro_esperado: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        nome: 'Receita de Vela de Alecrim',
        produtoId: 3,
        tempo_preparo: '1 hora',
        rendimento: '1 vela',
        modo_preparo: 'Derreta a cera de soja, adicione a essência e o corante, mexa bem e despeje no recipiente com o pavio.',
        lucro_esperado: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        nome: 'Receita de Sabonete de Aloe Vera e Calêndula',
        produtoId: 4,
        tempo_preparo: '30 minutos',
        rendimento: '1 barra',
        modo_preparo: 'Derreta a base glicerinada, adicione os extratos e o corante, mexa bem e despeje na forma.',
        lucro_esperado: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        nome: 'Receita de Vela de Chá Verde',
        produtoId: 5,
        tempo_preparo: '1 hora',
        rendimento: '1 vela',
        modo_preparo: 'Derreta a cera de soja, adicione a essência e o corante, mexa bem e despeje no recipiente com o pavio.',
        lucro_esperado: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Receitas', null, {});
  }
};
