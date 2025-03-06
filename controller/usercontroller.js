const express = require('express');
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const createUser = async (req, res) => {
    try {
        const userdata = req.body;
        const { name, email, password } = userdata;
        const newPass = await bcrypt.hash(password, 10);
        let user = new User({
            name,
            email,
            password: newPass,
        });
        await user.save();

        res.status(201).json({ message: "User Created Successfully." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const loginUser = async (req, res) => {
    try {
        // console.log("in Logon controller.");
        const userdata = req.body;
        const { email, password } = userdata;
        // console.log(userdata.password);

        const newUser = await User.findOne({ email });
        if (!newUser) {
            return res.send({ error: "User Is Not Found In List." });
        }
        console.log(newUser);


        const passMatch = await bcrypt.compare(password, newUser.password);

        // console.log(passMatch)
        if (!passMatch) {
            return res.send({ error: "Password Or Details Is Invalid." });
        }

        const token = jwt.sign({ _id: newUser._id }, 'token$');
        // console.log(token)

        res.status(201).json({ message: "Login successfully", token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const ping = async function (req, res) {
    try {
        console.log(req.user);
        res.status(200).json({ message: "User Is Available" });

    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { createUser, loginUser, ping };