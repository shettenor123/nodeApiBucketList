const mongoose = require('mongoose');
const Task = require('./taskSchema')
const { Schema, Types, model } = mongoose;
const { ObjectId } = Types;

const buckettaskSchema = new Schema({
    task: {
        type: [ObjectId],
        required: true,// 'Name is required'
        ref: Task,
    },
    status: {
        type: Number,
        default: '1'
    }
}, {
    versionKey: false,
    timestamps: true
});

const BucketTask = model('dbbuckettasklists', buckettaskSchema)
module.exports = BucketTask;
