const {
    respSuccess,
    respError
} = require('../utils/respHandler');
const { addTask, deleteTask, getTask, getAllTask, getAllTaskBucket, createTaskBucket, getTaskBucket, deleteTaskBucket } = require('../modules/userModule')

module.exports.getAllTaskBucket = async (req, res) => {
    try {
        const result = await getAllTaskBucket({})
        console.log('get all bucket task completed -----------------')
        respSuccess(res, result)
    } catch (error) {
        console.log(error)
        respError(error)
    }
}
module.exports.addTaskBucket = async (req, res) => {
    try {
        const result = await createTaskBucket(req.body)
        console.log('add bucket task completed -----------------')
        respSuccess(res, result)
    } catch (error) {
        console.log(error)
        respError(error)
    }
}
module.exports.getBucketTask = async (req, res) => {
    try {
        const { id } = req.params
        const result = await getTaskBucket({ _id: id })
        console.log('get bucket task completed -----------------')
        respSuccess(res, result)
    } catch (error) {
        console.log(error)
        respError(error)
    }
}
module.exports.deleteBucketTask = async (req, res) => {
    try {
        const { id } = req.params
        const result = await deleteTaskBucket({ _id: id })
        console.log('delete biucket task completed -----------------')
        respSuccess(res, { message: 'deleted Successfully' })
    } catch (error) {
        console.log(error)
        respError(error)
    }
}

module.exports.addTask = async (req, res) => {
    try {
        const result = await addTask(req.body)
        console.log('add task completed -----------------')
        respSuccess(res, result)
    } catch (error) {
        console.log(error)
        respError(error)
    }
}
module.exports.getTask = async (req, res) => {
    try {
        const { id } = req.params
        const result = await getTask({ _id: id })
        console.log('get task completed -----------------')
        respSuccess(res, result)
    } catch (error) {
        console.log(error)
        respError(error)
    }
}

module.exports.getAllTask = async (req, res) => {
    try {
        const result = await getAllTask({})
        console.log('getAll task completed -----------------')
        respSuccess(res, result)
    } catch (error) {
        console.log(error)
        respError(error)
    }
}
module.exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const check = await getTaskBucket({ task: { $in: [id] } })
        if (check && check.length) {
            respSuccess(res, { message: 'Task linked with bucket list, first remove from bucket' })
        } else {

            const result = await deleteTask({ _id: id })
            console.log('delete task completed -----------------')
            respSuccess(res, { message: "Task Deleted Successfully" })
        }
        console.log("🚀 ~ file: taskController.js ~ line 86 ~ module.exports.deleteTask ~ check", check)
    } catch (error) {
        console.log(error)
        respError(error)
    }
}