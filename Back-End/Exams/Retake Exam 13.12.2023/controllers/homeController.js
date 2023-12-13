const { hasUser } = require('../middlewares/guards')
const { getAllCourses, getOwnCourses, getSignedCourses } = require('../services/courseService')

const homeController = require('express').Router()

homeController.get('/', async (req, res) => {
    const courses = await getAllCourses()
    res.render('home', {
        title: 'Home Page',
        courses: courses.slice(-3)
    })
})
homeController.get('/profile', hasUser(), async (req, res) => {
    const ownCourses = await getOwnCourses(req.user._id)
    const signedCourses = await getSignedCourses(req.user._id)
    res.render('profile', {
        title: 'Profile Page',
        ownCourses,
        signedCourses
    })
})

module.exports = homeController;