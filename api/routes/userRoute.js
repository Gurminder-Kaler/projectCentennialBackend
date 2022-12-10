const express = require("express");
const router = express.Router();
const userController = require("@controllers/userController");
// const checkAuthMiddleware = require("@middlewares/checkAuth");
// const checkRoleMiddleware = require("@middlewares/checkRole");

//REST API- structure.

// GET retrieves resources.
// POST submits new data to the server.
// PUT updates existing data.
// DELETE removes data.

/**
 * @private GET users/:type
 * @params type
 * @usage Get either all doctors, all patients or all nurses by putting the type.
*/
router.get("/type/:type", userController.getAllUsersOfType);
//----------------------------------------------------------------------

/**
 * @private GET users/:userId/patients
 * @params userId
 * @usage Get all patients of a User.
*/
router.get("/:userId/patients", userController.getAllPatientsOfAUser);
//----------------------------------------------------------------------
   
/**
 * @private GET users/:userId
 * @params userId
 * @usage Get details of a user.
*/
router.get("/:userId", userController.getUserViaId);
//----------------------------------------------------------------------

/**
 * @public POST users/signUp
   @usage Add/Register a user: Doctor or Nurse.
*/
router.post("/signUp", userController.signUp);
//----------------------------------------------------------------------

/**
 * @public POST users/signIn
 * @usage Login a doctor or a nurse.
*/

router.post("/signIn", userController.signIn);
//----------------------------------------------------------------------

/**
 * @public PUT users/userId
 * @params userId
 * @usage Update users profile via user iser
*/
router.put("/:userId", userController.updateProfile);
//----------------------------------------------------------------------

/**
 * @public POST users/sendForgotPasswordOTPEmail
 * @usage send Forgot Password OTP email.
*/
router.post("/password/sendOtp", userController.sendForgotPasswordOTPEmail);
//----------------------------------------------------------------------

/**
 * @public POST users/verify
 * @usage Update a user's information.
*/
router.post("/password/verify", userController.verifyOTP);
//----------------------------------------------------------------------

/**
 * @public PUT users/update
 * @usage Update a user's password.
*/
router.put("/password/update", userController.updatePassword);
//----------------------------------------------------------------------


module.exports = router;

