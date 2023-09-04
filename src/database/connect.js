const mongoose = require("mongoose");

const DBConnection = async () => {

    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cursonodejs.bgursnq.mongodb.net/?retryWrites=true&w=majority`
        );

        console.log("Succesfully connected to Database");
    } catch (err) {
        console.log(err);
    }
}; 

module.exports = DBConnection;