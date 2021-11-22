const mongoose = require('mongoose');
const { env } = process;
const config = require('./config');
const { protocol, user, password, database, host, port } = config
function dbConnection() {

  let url;
  url = `mongodb://${user}:${password}@${host}:${port}/${database}`
  console.log("🚀 ~ file: db.js ~ line 19 ~ dbConnection ~ url", url)

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