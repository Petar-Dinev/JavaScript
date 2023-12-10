const { getAdsBySearch } = require('../services/adService')

const homeController = require('express').Router()

homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page'
    })
})
homeController.get('/search', (req, res) => {
    res.render('search', {
        title: 'Search Page'
    })
})
homeController.post('/search', async (req, res) => {
    const search = req.body.search;
    const ads = await getAdsBySearch(search)
    res.render('search', {
        title: 'Search page',
        ads
    })
})

module.exports = homeController;