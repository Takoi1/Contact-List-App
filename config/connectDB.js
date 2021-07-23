const mongoose = require("mongoose");
const connectionDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://Takoi:1234takoi@cluster0.kejwb.mongodb.net/db?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );

        console.log("Connected");
    } catch (err) {
        console.log(err);
    }
};
module.exports = connectionDB;