'use strict';
const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */

function User(firstName,lastName,dni,cantidadDeMascotas,extranjero){
  this.firstName=firstName,
  this.lastName=lastName,
  this.dni=dni,
  this.cantidadDeMascotas=cantidadDeMascotas,
  this.extranjero=extranjero,
  this.createdAt=new Date(),
  this.updatedAt=new Date()
}

module.exports = {
  async up (queryInterface, Sequelize) {
    let randomUsers=[];
    for (let i = 0; i < 30; i++) {
      randomUsers.push(new User(faker.person.firstName(), faker.person.lastName(), faker.string.numeric(8), faker.number.int(9), faker.number.int(1)));
      
    }
    await queryInterface.bulkInsert('Users', randomUsers, {});
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Users', null, {});
     
  }
};
