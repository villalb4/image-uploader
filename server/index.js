const app = require('./src/app')
require('dotenv').config()

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
    console.log(`Server listening in: http://localhost:3010/`)
})

module.exports = server