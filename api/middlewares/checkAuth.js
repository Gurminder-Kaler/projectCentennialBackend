const jwt = require('jsonwebtoken');
const messages = require('@constants/messages');
module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decoded = jwt.verify(token, process.env.JWT_KEY)
		req.userData = decoded;
		console.log('decoded', decoded);
		next();
	} catch (error) {
		return res.status(401).json({
			success: false,
			message: messages.FAILURE.AUTH_FAILED
		});
	}
};