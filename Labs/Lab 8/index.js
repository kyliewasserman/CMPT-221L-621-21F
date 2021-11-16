const express = require('express')
const app = express()
const mongoose = require("mongoose")
const studentsModel = require("./models/students")
var connectionUrl = "mongodb+srv://Student:CorgisAreDope@cluster0.h6c8l.mongodb.net/Lab-8?retryWrites=true&w=majority"
mongoose.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err) throw err
    console.log("Connected")
})

app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")

app.get("/home", (req, res)=>{
    res.render("index")
})

app.post("/api/students", (req, res)=>{
    const Savestudents = new studentsModel(req.body)
    Savestudents.save((error, savedstudents)=>{
        if(error) throw error
        res.json(savedstudents)
    })
})

app.listen(3000, ()=>{
    console.log("listening to port 3000")
})