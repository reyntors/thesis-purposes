const mongoose = require('mongoose');
const { Schema } = mongoose;



const userSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    }
})



userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
