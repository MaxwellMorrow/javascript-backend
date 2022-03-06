require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req,res)=>{res.send('welcome to the home page')})

app.use('/auth', require('./controllers/auth'))

app.listen(process.env.PORT,()=>{res.send('listening at port'+ process.env.PORT)})