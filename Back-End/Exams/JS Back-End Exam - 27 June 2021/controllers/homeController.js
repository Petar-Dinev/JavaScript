const { hasUser } = require('../middlewares/guards')
const { getOwnTrips } = require('../services/tripService')

const homeController = require('express').Router()

homeController.get('/', (req, res) => {
    res.render('home', {title: 'Home page'})
})
homeController.get('/profile', hasUser(), async (req, res) => {
    console.log(res.locals.user);
    const trips = await getOwnTrips(req.user._id)
    console.log(trips);
    res.render('profile', {title: 'Profile page', trips})
})

module.exports = homeController;