const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to create a new user
router.post('/users', userController.createUser);

router.get('/users', userController.getAllUsers);

router.get('/users/closers', userController.getAllClosers);

module.exports = router;
