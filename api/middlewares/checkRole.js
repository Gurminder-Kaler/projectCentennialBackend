const jwt = require('jsonwebtoken');
const messages = require('@constants/messages');
const User = require('@models/userModel');
const ROLE = require('@constants/roles');
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        User.findById(decoded.userId).then(result => {
            if (result && result.role) {
                if (result.role == req.role) {
                    next();
                } else {
                    res.status(405).json({
                        success: false,
                        message: messages.FAILURE.NOT_AUTHORIZED
                    });
                }
            } else {
                res.status(405).json({
                    success: false,
                    message: messages.FAILURE.NO_ROLE_ASSIGNED
                });
            }
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: messages.FAILURE.AUTH_FAILED
        });
    }
}