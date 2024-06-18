require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts.js')

//express app
const app = express()

//midleware
app.use(express.json())

app.use((req, res,next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts/',workoutRoutes)


//connect to db
mongoose.connect(process.env.MANGO_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('connected to db & listening on port', process.env.PORT)
    })
})
.catch((error) =>{
    console.log(error)
})

//listen for requests
