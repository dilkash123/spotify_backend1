const mongoose = require('mongoose');

const dbConnection = () => {
  mongoose
    .connect(
      "mongodb://localhost:27017/music",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to database:", err);
    });
};

module.exports = dbConnection;