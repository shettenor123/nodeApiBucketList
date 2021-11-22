const mongoose = require('mongoose');
const { Schema, Types, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: false// 'Name is required'
    },
    email: {
        type: String,
        trim: true,
        required: false
    },

    password: {
        type: String,
        required: false,
        default: null
    },

    status: {
        type: Number,
        default: '1'
    }
}, {
    versionKey: false,
    timestamps: true
});

const Users = model('dbusers', userSchema)
module.exports = Users;
