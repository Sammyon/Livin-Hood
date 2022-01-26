'use strict';
const fs = require('fs')
module.exports = {
   up (queryInterface, Sequelize) {
    let data =  JSON.parse(fs.readFileSync('./data/admins.json'))
    console.log(data)
    data.map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })
    console.log(data, '<<<<<<<<< data')
    return queryInterface.bulkInsert("Admins", data)
  
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

   down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Admins", null)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
