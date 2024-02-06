const Lead = require('../models/Lead'); // Replace with your Lead model

exports.getDashboardData = async (req, res) => {
    try {
        console.log("hey")
        const data = await Lead.aggregate([
            // Your aggregation stages go here
            // Example: Group by 'status' and count
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 }
                }
            }
        ]);

        // Send the response back
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
