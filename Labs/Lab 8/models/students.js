const mongoose = require('mongoose');
const Schema = mongoose.Schema

const studentsSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Firstname is required"]
    }, 
    lastname: {
        type: String,
        required: [true, "Lastname is required"]
    }
})

const studentsModel = mongoose.model("students", studentsSchema)
module.exports = studentsModel