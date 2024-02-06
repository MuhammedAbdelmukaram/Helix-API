const express = require('express');
const router = express.Router();
const leadsController = require('../controllers/leadController');

router.post('/leads', leadsController.createlead);

router.get('/leads', leadsController.getAllleads);

router.get('/leads/count', leadsController.getleadCount);


module.exports = router;
