const express = require("express");

// const adminRoute = require('./adminRoutes');

const userRoute = require('./userRoutes.js');
const router = express.Router();


router.use("/user", userRoute);
// router.use("/admin", adminRoute);

module.exports = router;
