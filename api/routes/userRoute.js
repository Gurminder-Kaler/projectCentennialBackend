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
 * @usage Get details of a user, since patient is also a type of user.
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
 * @public PUT users/updateProfile
 * @params userId
 * @usage Update a user's information.
*/
router.put("/:userId", userController.updateProfile);
//----------------------------------------------------------------------

/**
 * @public POST users/updateProfile
 * @params userId
 * @usage Update a user's information.
*/
router.post("/sendForgotPasswordOTPEmail", userController.sendForgotPasswordOTPEmail);
//----------------------------------------------------------------------

/**
 * @public POST users/updateProfile
 * @params userId
 * @usage Update a user's information.
*/
router.post("/verifyOTP", userController.verifyOTP);
//----------------------------------------------------------------------

/**
 * @public PUT users/updateProfile
 * @params userId
 * @usage Update a user's information.
*/
router.put("/updatePassword", userController.updatePassword);
//----------------------------------------------------------------------


module.exports = router;

