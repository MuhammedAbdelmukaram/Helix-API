require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS package
const userRoutes = require('./routes/userRoute');
const leadRoutes = require('./routes/leadRoute');
const dashboardRoutes = require('./routes/dashboardRoute');
const signInRoutes = require("./auth/signInRoute");

const app = express();
const port = 3000;

// MongoDB connection string
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbClusterUrl = process.env.DB_CLUSTER_URL;

const mongoUri = `mongodb+srv://${dbUsername}:${dbPassword}@${dbClusterUrl}/?retryWrites=true&w=majority`;

mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(cors()); // Enable CORS
app.use(express.json());

// In your backend's main file
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


// Use a route prefix
app.use('/api', signInRoutes);
app.use('/api', userRoutes);
app.use('/api', leadRoutes);
app.use('/api', dashboardRoutes);




// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
