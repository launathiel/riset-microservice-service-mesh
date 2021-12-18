/* eslint-disable no-console */
// const connectionString = `mongodb://${process.env.MONGO_ROOT_USERNAME}:${process.env.MONGO_ROOT_PASSWORD}@${process.env.DB_HOST}`;

const mongoose = require('mongoose');

const connectDB = async () => {
  const connectionString = 'mongodb://root:nathan123@localhost';
  try {
    const conct = await mongoose.connect(connectionString, {
      dbName: 'posts',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conct.connection.host}`);
  } catch (err) {
    console.log(`Error ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
