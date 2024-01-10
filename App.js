const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config')
const cors = require('cors');

const app = express();




app.use(cors());
app.use(express.static('public'))
app.use(express.json());


mongoose.connect(dbConfig.db, {
  
})
.then(() => {
    console.log("Database successfully connected");
})
.catch((error) => {
    console.error(error);
});

app.use("/users", require("./routes/users.routes"));




app.listen(5000, function () {
    console.log("Ready to Go!");
});
