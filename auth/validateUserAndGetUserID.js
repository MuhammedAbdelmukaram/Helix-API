const jwt = require('jsonwebtoken');

function validateUserAndGetUserID(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded.userId; // Assuming the token was encoded with { userId: user._id }
    } catch (error) {
        console.error('JWT validation error:', error.message);
        return null;
    }
}
