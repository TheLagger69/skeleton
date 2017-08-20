require('dotenv').config({path: "config/env"})
const express = require('express')
const app = express()
const path = require('path')

//Static content
app.use(express.static(__dirname+'/public'))

app.all('/**',(req,res) => res.sendFile(__dirname + '/public/views/index.html'))

app.listen(process.env.PORT);
