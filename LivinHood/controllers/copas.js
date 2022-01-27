class Controller {
  static portfolio (req, res) {

  }

  static login (req, res) {

  }

  static signup (req, res) {

  }

  static buy (req, res) {

  }

  static findAll (req, res) {
    Model.findAll()
      .then(data => {
        res.render('path ejs', {data})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static deleteId (req, res) {
    // const {qFirstName, qLastName} = req.query
    const {id} = req.params
    const deleteInfo = []
    Model.findByPk(id)
      .then(data => {
        deleteInfo.push(data)
        return Model.destroy({
          where: {
            id : id
          }
        })
      })
      .then (_=> {
        res.redirect(`/stores/${storeId}?qFirstName=${data.firstName}&qLastName=${data.lastName}`)
      })
      .catch(err => {
        if (err.name === 'SequelizeValidationError') {
          let errors = []
          err.errors.forEach(e => errors.push(e.message))
          res.send (errors)
        } else {
          res.send (err)
        }
      })
  }
}