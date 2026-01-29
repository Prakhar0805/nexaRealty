const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;
console.log("Testing connection to:", uri ? uri.substring(0, 20) + "..." : "undefined");

mongoose.connect(uri)
    .then(() => {
        console.log("SUCCESS: Connected to MongoDB");
        process.exit(0);
    })
    .catch(err => {
        console.error("FAILURE: Could not connect to MongoDB");
        console.error(err);
        process.exit(1);
    });
