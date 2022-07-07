//Imports
const express = require('express')
const app = express()
// const cors = require('cors')
require('dotenv').config()



//=====MIDDLEWARES=====
app.use(express.json())
// app.use(cors())

//=====ROUTES=====
//Users



//=====PORT=====
const port = 8080

app.listen(port, () => console.log(`Express app running on port ${port}`))
