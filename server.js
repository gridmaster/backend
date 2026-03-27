const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))

app.use('/api', require('./routes/authRoutes'))
app.get('/',(req,res) => res.send('My backend'))
const port = process.env.PORT
app.listen(port, () => console.log(`Server is running on port ${port}`))
