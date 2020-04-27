const models = require('../models')

const getAllVillains = async (request, response) => {
  const villains = await models.villains.findAll(({ attributes: ['name', 'movie', 'slug'] }))

  return response.send(villains)
}

const getVillainBySlug = async (request, response) => {
  const { slug } = request.params

  const foundVillain = await models.villains.findOne({
    attributes: ['name', 'movie', 'slug'],
    where: { slug }
  })

  return foundVillain
    ? response.send(foundVillain)
    : response.sendStatus(404)
}

const saveNewVillain = async (request, response) => {
  const {
    name, movie, slug
  } = request.body

  if (!name || !movie || !slug) {
    return response.status(400).send('Required fields are name, movie, and slug')
  }

  const newVillain = await models.villains.create({
    name, movie, slug
  })

  return response.status(201).send(newVillain)
}

module.exports = { getAllVillains, getVillainBySlug, saveNewVillain }

