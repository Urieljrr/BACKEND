const express = require('express');
const user = require('../controllers/users.controllers');
const router = express.Router();

router.get('/', user.getUsers );
router.post('/', user.createUser);

module.exports = router;