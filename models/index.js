const Sequelize = require('sequelize')
const villainsModel = require('./villains')

const connection = new Sequelize('disneyVillains', 'villains', 'V1!laiN$', {
  host: 'localhost', dialect: 'mysql'
})

const villains = villainsModel(connection, Sequelize)

module.exports = { villains }
