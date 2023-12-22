const auctionController  = require("../controllers/auctionController")
const authController = require("../controllers/authController")
const homeController = require("../controllers/homeController")


module.exports = (app) => {
   app.use('/', homeController)
   app.use('/auth', authController)
   app.use('/auctions', auctionController)
   app.use('*', (req, res) => {
      res.render('404', {
         title: 'Page Not Found'
      })
   })
}