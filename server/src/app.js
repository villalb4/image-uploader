const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const uploadRouter = require("./routes/upload")

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use("/upload", uploadRouter)

module.exports = app