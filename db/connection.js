const mongoose = require('mongoose')

const connectDB = () => {
  return mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
  .then(() => {
    console.log("database connection succesful");
}).catch((err) =>{
    console.log("database connection error" + err);
}))
}

module.exports = connectDB
