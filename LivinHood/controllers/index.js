const {User, Portfolio, Stock, Company, Admin} = require ('../models')
const bcrypt = require('bcryptjs')

//!! DUMMY CAN BE COPY PASTED

class Controller {
  static main (req, res) {
    res.render('landing')
  }

  static landing (req, res) {
    res.render('landing')
  }

  static loginForm (req, res) {
    res.render()
  }

  static login (req, res) {
    const {name, password, isAdmin} = req.body
    User.findOne({
      where: {
        name: name
      }
    })
      .then(user => {
        if (user) {
          let valid = bcrypt.compareSync(password, user.password)
          if (valid) {
            res.redirect('/')
          } else {
            throw new Error (`Wrong Password`)
          }
        } else {
          throw new Error (`User not found`)
        }
      })
      .catch(err => {
        if (err.name === 'SequelizeValidationError') { //!KALAU ADA ERROR VALIDASI AKAN MASUK SINI
          let errors = []
          err.errors.forEach(e => errors.push(e.message))
          res.send (errors)
        } else {
          res.send (err) //! KALAU TIDAK ADA ERROR VALIDASI
        }
      })
  }

  static formSignup (req, res) {
    res.render('/register')
  }

  static signup (req, res) {
    let { name, bankAccountNumber, email, password, credit, isAdmin } = req.body;
    User.create({ name, bankAccountNumber, email, password, credit, isAdmin })
      .then(() => {
        res.redirect(`/login`) //! PATH REDIRECT
      })
      .catch(err => {
        if (err.name === 'SequelizeValidationError') { //!KALAU ADA ERROR VALIDASI AKAN MASUK SINI
          let errors = []
          err.errors.forEach(e => errors.push(e.message))
          res.send (errors)
        } else {
          res.send (err) //! KALAU TIDAK ADA ERROR VALIDASI
        }
      })
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

module.exports = Controller