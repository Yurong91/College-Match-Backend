//Imports
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./config/database')



//=====MIDDLEWARES=====
app.use(express.json())
app.use(cors())


//=====ROUTES=====
//Users
app.use('/api/v1/users', require('./routes/api/users'))
//Schools
app.use('/api/v1/schools', require('./routes/api/schools'))
//MyList



//=====PORT=====
const port = 8080

app.listen(port, () => console.log(`Express app running on port ${port}`))
