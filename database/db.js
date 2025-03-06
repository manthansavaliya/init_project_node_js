const mongoose = require("mongoose");

const url = process.env.MONGO_URL ?? "mongodb://127.0.0.1:27017/testNode2";
mongoose
    .connect(url)
    .then(() => {
        console.log("DataBase Connected.");
    })
    .catch((err) => {
        console.log("Error Occurred.", err);
    });

module.exports = mongoose;