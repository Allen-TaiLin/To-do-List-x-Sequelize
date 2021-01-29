module.exports = {
  authenticate: (req, res, next) => {
    if (req.authenticated) {
      return next()
    }
    res.render('login')
  }
}