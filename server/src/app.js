const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Worldl!'))

module.exports = app