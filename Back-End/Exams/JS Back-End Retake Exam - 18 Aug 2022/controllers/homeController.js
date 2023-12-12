const homeController = require('express').Router()
const {hasUser} = require('../middlewares/guards')
const { getWishedBooks } = require('../services/bookService')

homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page'
    })
})
homeController.get('/profile', hasUser(), async (req, res) => {
    const books = await getWishedBooks(req.user._id);

    res.render('profile', {
        title: 'Profile Page',
        books,
    })
})

module.exports = homeController;