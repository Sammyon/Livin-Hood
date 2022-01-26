'use strict';

module.exports = {
   up (queryInterface, Sequelize) {
    return queryInterface.addColumn("Portofolios", "UsersId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id"
      }, 
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
})
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

  },

   down (queryInterface, Sequelize) {
     return queryInterface.removeColumn("Users", "portofolioId")
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
