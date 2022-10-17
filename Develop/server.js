const express = require('express')
const fs = require('fs')

const apiroutes = require('./routes/apiroutes')
const htmlroutes = require('./ routes/htmlroutes')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended:true}))
app.use(express.json)

app.use(express.static('public'))

app.use('/api',apiroutes)
app.use('/',htmlroutes)

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`)
})