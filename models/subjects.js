const mongoose = require('mongoose')
const { isEmail } = require('validator')

let subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "please enter an email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "please enter a valid email"],
    },
    password: {
        type: String,
    },
    mobile_number: {
        type: Number,
        required: true,
    },

    deleted: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model("subjects",subjectSchema,'Subjects')