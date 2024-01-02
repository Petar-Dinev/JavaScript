const { getAllAnimals } = require('../services/animalService');

const homeController = require('express').Router()

homeController.get('/', async (req, res) => {
    const animals = await getAllAnimals()
    res.render('home', {
        title: 'Home Page',
        animals: animals.slice(-3)
    })
})

homeController.get('/search', (req, res) => {
    res.render('search', {
        title: 'Search page'
    })
})

homeController.post('/search', async (req, res) => {
   const animals = await getAllAnimals()

  const results = animals.filter(x => x.location.toLowerCase().includes(req.body.search.toLowerCase()))
    res.render('search', {
        title: 'Search page',
        results
    })
})

module.exports = homeController;