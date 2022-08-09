const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose
        .connect("mongodb+srv://user:user-pwd@cluster0.4kyy3fb.mongodb.net/?retryWrites=true&w=majority", 
        {useNewUrlParser: true}
        );
    }catch(err){
        console.error(err);
        console.error("Error connecting to Mongodb");
    }
}

module.exports = {connect};