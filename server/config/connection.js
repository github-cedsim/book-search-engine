const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb+srv://cedsim:NYexNRP9NE0vwXwa@booksearchdb.wo1zefd.mongodb.net/?retryWrites=true&w=majority&ssl=true';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;