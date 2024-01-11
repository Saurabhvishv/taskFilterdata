import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    employee_id: {
        type: Number,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }

}, { timestamps: true })

export const User = mongoose.model('UserRegister', userSchema)