const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String,
        // Unique:
        // Required:
        // Trimmed: 
    },
    email: {
        type: String,
        // Required:
        // Unique:
        // Validate: 

    },
    thoughts: [


    ],
    friends: [

    ]
},
{

});

const User = model('User', UserSchema);

module.exports = User;