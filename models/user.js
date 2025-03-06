const { default: mongoose, Type } = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
},
    {
        timestamps: true,
    },
);

const User = mongoose.model('User', schema);
module.exports = User;

