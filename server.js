//Imports
const express = require('express')
const app = express()
const cors = require('cors')


//=====MIDDLEWARES=====
app.use(express.json())
app.use(cors())

//=====ROUTES=====
//Users

app.use()


//=====PORT=====
const port = 8080

app.listen(port, () => console.log(`Express app running on port ${port}`))
