const animalController = require("../controllers/animalController")
const authController = require("../controllers/authController")
const homeController = require("../controllers/homeController")


module.exports = (app) => {
   app.use('/', homeController)
   app.use('/auth', authController)
   app.use('/animals', animalController)
   app.use('*', (req, res) => {
      res.render('404', {
         title: 'Page Not Found'
      })
   })
}