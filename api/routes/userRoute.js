const express = require("express");
const router = express.Router();
const userController = require("@controllers/userController");
const checkAuthMiddleware = require("@middlewares/checkAuth");
const checkRoleMiddleware = require("@middlewares/checkRole");

//REST API- structure.

//  /users GET
router.post("/getAllUsers", userController.getAllUsers);
// checkAuthMiddleware, checkRoleMiddleware

//  /users/:id GET
router.post("/getUserViaId", userController.getUserViaId);
//checkAuthMiddleware

//  /users/create POST
router.post("/signUp", userController.signUp);

// /users/create POST
router.post("/signIn", userController.signIn);

router.post("/updateProfile", userController.updateProfile);

router.post("/sendForgotPasswordOTPEmail", userController.sendForgotPasswordOTPEmail);

router.post("/verifyOTP", userController.verifyOTP);

router.post("/updatePassword", userController.updatePassword);

module.exports = router;

