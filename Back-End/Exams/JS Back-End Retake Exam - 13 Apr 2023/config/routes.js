const authController = require("../controllers/authController")
const gameController = require("../controllers/gameController")
const homeController = require("../controllers/homeController")


module.exports = (app) => {
   app.use('/', homeController)
   app.use('/auth', authController)
   app.use('/games', gameController)
   app.use('*', (req, res) => {
      res.render('404', {
         title: 'Not Found'
      })
   })
}