const mongoose = require('mongoose');
const { Schema, Types, model } = mongoose;

const taskSchema = new Schema({
    taskName: {
        type: String,
        trim: true,
        required: true// 'Name is required'
    },
    priority: {
        type: Object,
        required: true
    },

    dueData: {
        type: Date,
        required: true,

    },
    details: {
        type: String
    },

    taskStatus: {
        type: Object,
    },
    status: {
        type: Number,
        default: '1'
    }
}, {
    versionKey: false,
    timestamps: true
});

const Tasks = model('dbtasks', taskSchema)
module.exports = Tasks;
