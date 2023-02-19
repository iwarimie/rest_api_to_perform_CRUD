const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./routes/index.route')

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/v1', router)

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to your database succcessfully')
})
.catch( () => {
    console.log('Encountered an issue trying to connect to your database')
})

const port = process.env.PORT || 3838

app.listen(port, () => {
    console.log(`Server is up and running on http://localhost:${port}`)
})