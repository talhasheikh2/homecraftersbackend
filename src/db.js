const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace the URI with your MongoDB connection string
    const uri = 'mongodb://127.0.0.1:27017/homeCraft';
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // Connect to MongoDB
    const conn = await mongoose.connect(uri, options);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
