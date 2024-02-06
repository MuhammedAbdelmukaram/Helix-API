const express = require('express');
const router = express.Router();
const authController = require('./signInController'); // Adjust the path as necessary

// Route for signing in
router.post('/auth/signin', authController.signIn);

module.exports = router;

