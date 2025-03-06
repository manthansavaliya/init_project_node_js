const express = require('express');
const { createUser, loginUser, ping } = require('../controller/usercontroller.js');
const { jwtAuth } = require('../middleware/jwt.js');
const tryCatch = require('../middleware/tryCatch.js');
const router = express.Router();


router.post('/create', tryCatch(createUser));
router.post('/login', tryCatch(loginUser));


router.post('/ping', jwtAuth, ping);
// router.get('/read', readUser);
// router.put('/update', updateUser);
// router.patch('/delete', deleteUser);




module.exports = router;
