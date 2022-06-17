const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URI } = process.env;

// create the connection function
const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: trmongoose.usted,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Mongodb..connected ....");

    })
    .catch((err) => {
        console.error(err.message);
        // exit with fail

        process.exit(1)
    })
}

//mongoose connection

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//     });

//     console.log("Mongodb..connected ....");
//   } catch (err) {
//     console.error(err.message);
//     // exit with fail

//     process.exit(1);
//   }
// };

module.exports = connectDB;
