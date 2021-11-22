const Users = require('../models/userSchema')
const Tasks = require('../models/taskSchema')
const BucketList = require('../models/taskBucketListSchema')

module.exports.createTaskBucket = (data) => new Promise((resolve, reject) => {
    BucketList.create(data)
        .then(doc => {
            resolve(doc)
        })
        .catch(error => reject(error))
})
module.exports.getAllTaskBucket = (query) => new Promise((resolve, reject) => {
    BucketList.find(query)
        .populate('task')
        .then(doc => {
            resolve(doc)
        })
        .catch(error => reject(error))
})

module.exports.getTaskBucket = (query) => new Promise((resolve, reject) => {
    BucketList.find(query)
        .then(doc => {
            resolve(doc)
        })
        .catch(error => reject(error))
})

module.exports.deleteTaskBucket = (query) => new Promise((resolve, reject) => {
    BucketList.deleteOne(query)
        .then(doc => {
            resolve(doc)
        })
        .catch(error => reject(error))
})



module.exports.addTask = (data) => new Promise((resolve, reject) => {
    Tasks.create(data)
        .then(doc => {
            resolve(doc)
        })
        .catch(error => reject(error))
})


module.exports.getTask = (query) => new Promise((resolve, reject) => {
    Tasks.findOne(query)
        .then(doc => {
            resolve(doc)
        })
        .catch(error => reject(error))
})
module.exports.deleteTask = (query) => new Promise((resolve, reject) => {
    Tasks.deleteOne(query)
        .then(doc => {
            resolve(doc)
        })
        .catch(error => reject(error))
})
module.exports.getAllTask = (data) => new Promise((resolve, reject) => {
    Tasks.find(data)
        .sort({ 'priority.value': 1 })
        .then(doc => {
            resolve(doc)
        })
        .catch(error => reject(error))
})


module.exports.addUser = (data) => new Promise((resolve, reject) => {
    Users.create(data)
        .then(doc => {
            resolve(doc)
        })
        .catch(error => reject(error))
})

module.exports.getUser = (query) => new Promise((resolve, reject) => {
    Users.findOne(query)
        .then(doc => {
            resolve(doc)
        })
        .catch(error => reject(error))
})