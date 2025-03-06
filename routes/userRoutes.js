const express = require('express');
const { createUser, loginUser, ping } = require('../controller/usercontroller.js');
const { jwtAuth } = require('../middleware/jwt.js');
const router = express.Router();


router.post('/create', createUser);
router.post('/login', loginUser);


router.post('/ping', jwtAuth, ping);
// router.get('/read', readUser);
// router.put('/update', updateUser);
// router.patch('/delete', deleteUser);




module.exports = router;
