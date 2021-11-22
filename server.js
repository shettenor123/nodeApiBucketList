const express = require('express')
const cors = require("cors");
const app = express();
require('./config/db').dbConnection();
const bodyParser = require("body-parser");
const port = 8000;
const { register, login, logout } = require('./src/controllers/userController')
const { addTask, getTask, deleteTask, getAllTask, getAllTaskBucket, addTaskBucket, getBucketTask, deleteBucketTask } = require('./src/controllers/taskController')
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: [
            "http://localhost:3000"
        ],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
        credentials: true,
    })
);

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.post('/login', async (req, res) => {
    const result = await login(req, res)
});
app.post('/logout', async (req, res) => {
    const result = await logout(req, res)
});
app.post('/register', async (req, res) => {
    const result = await register(req, res)
});


app.post('/addTaskBucket', async (req, res) => {
    const result = await addTaskBucket(req, res)
});
app.get('/getAllTaskBucket', async (req, res) => {
    const result = await getAllTaskBucket(req, res)
});
app.get('/getBucketTask/:id', async (req, res) => {
    const result = await getBucketTask(req, res)
});
app.delete('/deleteBucketTask/:id', async (req, res) => {
    const result = await deleteBucketTask(req, res)
});



app.post('/addTask', async (req, res) => {
    const result = await addTask(req, res)
});
app.get('/getTask/:id', async (req, res) => {
    const result = await getTask(req, res)
});
app.delete('/deleteTask/:id', async (req, res) => {
    const result = await deleteTask(req, res)
});
app.get('/getAllTask', async (req, res) => {
    const result = await getAllTask(req, res)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});