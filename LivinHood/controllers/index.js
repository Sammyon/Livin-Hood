const {User, Portfolio, Stock, Company, Admin} = require ('../models')

//!! DUMMY CAN BE COPY PASTED

class Controller {
  static landing (req, res) {
    res.render('landing')
  }

  static login (req, res) {
    res.render()
  }

  static signup (req, res) {

  }

  static buy (req, res) {

  }

  static listPortfolio (req, res) {
    Portfolio.findAll()
      .then(data => {
        res.render('path list portfolio', {data})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static listCompany (req, res) {
    Company.findAll()
      .then(data => {
        res.render('path list company', {data})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static listStock (req, res) {
    Stock.findAll()
      .then(data => {
        res.render('path list stock', {data})
      })
      .catch(err => {
        res.send(err)
      })
  }

  
}