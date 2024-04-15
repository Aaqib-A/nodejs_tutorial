'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: 'john@mail.com',
      uuid: '583b94a0-d580-473c-9f78-9d9660f9fae3',
      role: 'admin',
      createdAt: '2022-05-16T11:22:25.632Z',
      updatedAt: '2022-05-16T12:00:38.868Z'
    }, {
      name: 'Jane Doe',
      email: 'jane@mail.com',
      uuid: '583b94a0-d580-473c-9f78-9d6660fffae3',
      role: 'admin',
      createdAt: '2022-05-16T11:22:25.632Z',
      updatedAt: '2022-05-16T12:00:38.868Z'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
