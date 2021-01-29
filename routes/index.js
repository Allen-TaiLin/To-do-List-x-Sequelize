const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')

// 掛載 middleware
const { authenticator } = require('../middleware/auth')

// 加入驗證程序
router.use('/todos', authenticator, todos)
router.use('/users', users)
router.use('/', authenticator, home)

module.exports = router