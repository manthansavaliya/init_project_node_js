const User = require("../models/user.js");
const jwt = require('jsonwebtoken');

const jwtAuth = async function (req, res, next) {
    try {
        let d_token = req.headers[ 'authorization' ]
        let newToken = d_token.split(" ")[ 1 ];

        let decoded = jwt.verify(newToken, 'token$');

        const user = await User.findOne({ _id: decoded._id });

        if (!user) {
            return res.send("User Is Not Existing.")
        }

        req.user = user
        next();
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = { jwtAuth };