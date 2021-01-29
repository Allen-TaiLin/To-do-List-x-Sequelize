// 載入 passport、User 模組
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const db = require('../models')
const User = db.User

module.exports = (app) => {
  // 初始化 Passport 模組
  app.use(passport.initialize())
  app.use(passport.session())
  // 設定本地登入策略
  passport.use(new LocalStrategy({ usernameField: 'email', passReqToCallback: true }, (req, email, password, done) => {
    User.findOne({ where: { email } })
      .then((user) => {
        if (!user) {
          req.flash('warning_msg', '此信箱尚未註冊!')
          return done(null, false, { message: '此信箱尚未註冊!' })
        }
        return bcrypt.compare(password, user.password)
          .then((isMatch) => {
            if (!isMatch) {
              req.flash('warning_msg', '信箱或密碼錯誤!')
              return done(null, false, { message: '信箱或密碼錯誤!' })
            }
            return done(null, user)
          })
      })
      .catch((error) => done(error, false))
  }))

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findByPk(id)
      .then((user) => {
        user = user.toJSON()
        done(null, user)
      })
      .catch((error) => done(error, null))
  })
}