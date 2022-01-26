const {} = require ('../models')
const { Model } = require('sequelize/dist')
const {User, Portfolio, Stock, Company, Admin} = require ('../models')

//!! DUMMY CAN BE COPY PASTED

class Controller {
  static portfolio (req, res) {

  }

  static login (req, res) {

  }

  static signup (req, res) {

  }

  static buy (req, res) {

  }

  static dummy (req, res) {
    Model.findAll()
      .then(data => {
        res.render('path ejs', {data})
      })
      .catch(err => {
        res.send(err)
      })
  }
}