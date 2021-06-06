'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("user",[{
      "name": "Rashawn Doyley",
      "email": "rashawndoyley@gmail.com",
      "password": "password"
  },
  {
      "name": "Travis Mckie",
      "email": "test123@gmail.com",
      "password": "password"
  },
  {
      "name": "Antonio Reid",
      "email": "test2234@gmail.com",
      "password": "password"
  }
], {validate:false,individualHooks:true})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
