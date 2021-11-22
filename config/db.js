const mongoose = require('mongoose');
const { env } = process;
const config = require('./config');
const { protocol, user, password, database, host, port } = config
function dbConnection() {

  let url;
  // url = `mongodb://${user}:${password}@${host}:${port}/${database}`

  url = `mongodb+srv://db:active.123@cluster0.i33o3.mongodb.net/task?retryWrites=true&w=majority`

  mongoose.connect(url, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    autoIndex: true,
    connectTimeoutMS: 300000,
    socketTimeoutMS: 50000,
    serverSelectionTimeoutMS: 50000
  }).catch(console.log);

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', () => {

    console.log('DB Connection Succeeded');

  });

  return db;

};

module.exports = {
  dbConnection
}