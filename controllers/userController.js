const User = require('../models/User');
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Hashing the password before saving
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({ name, email, password: hashedPassword, role }); // Use 'password' field
        await newUser.save();

        // Exclude the password from the response for security
        const userResponse = { ...newUser.toObject(), password: undefined };

        res.status(201).json({ message: 'User created successfully', user: userResponse });
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }

};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

exports.getAllClosers = async (req, res) => {
    try {
        const closers = await User.find({ role: 'closer' });
        res.status(200).json(closers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching closers', error: error.message });
    }
};
