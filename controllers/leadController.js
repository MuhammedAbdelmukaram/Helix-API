const lead = require('../models/Lead');

exports.createlead = async (req, res) => {
    try {
        const newlead = new lead(req.body);
        await newlead.save();
        res.status(201).json(newlead);
    } catch (error) {
        res.status(500).json({ message: 'Error creating lead', error: error.message });
    }
};



exports.getAllleads = async (req, res) => {
    try {
        const leads = await lead.find({});
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leads', error: error.message });
    }
};


// In leadController.js

exports.getleadCount = async (req, res) => {
    try {
        const count = await lead.countDocuments({});
        res.json({ count });
    } catch (error) {
        res.status(500).json({ message: 'Error getting lead count', error: error.message });
    }
};

