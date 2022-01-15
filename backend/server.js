const express = require('express')
const morgan = require('morgan')
const cors =require('cors')
const path = require('path')
const dotenv = require('dotenv')
//load config
dotenv.config({path:path.join(__dirname,"/config/config.env")})
const connectDb = require('./config/db')
const chalk = require('chalk')
const { mongo } = require('mongoose')
const mongoSanitize = require('express-mongo-sanitize');
const app =  express()
const port = process.env.PORT ||  3000;

//connect database
connectDb()

//middlewares

app.use(cors({
    origin:'*',
    method:['PUT']
}))
//safety against $ sign operator
app.use(mongoSanitize())
//log api calls
app.use(morgan('dev'))

//routes will go here 

app.use('/api/users',require('./src/routes/users'))
app.use('/api/auth',require('./src/routes/auth'))
app.use('/api/profile',require('./src/routes/profile'))
app.use('/api/posts',require('./src/routes/posts'))

app.use('*',(req,res)=> res.send("404 page not found"))



app.listen(port,()=>console.log(chalk.red.bold(`Server is listening at port ${port}`)))