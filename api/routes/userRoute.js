const express = require("express");
const router = express.Router();
const userController = require("@controllers/userController");
const checkAuthMiddleware = require("@middlewares/checkAuth");
const checkRoleMiddleware = require("@middlewares/checkRole");

//REST API- structure.

/**
 * @private GET users/:type
   @usage Getting either all doctors, all patients or all nurses.
*/
router.get("/:type", userController.getAllUsersOfType);

/**
 * @private GET users/:userId/patients
   @usage Getting all patients of a User.
*/
router.get("/:userId/patients", userController.getAllPatientsOfAUser);
// checkAuthMiddleware, checkRoleMiddleware

/**
 * @private GET users/patients/:patientId
   @usage Getting patients info via patientId.
*/
router.get("/patients/:patientId", userController.getAPatientsInfo);
// checkAuthMiddleware, checkRoleMiddleware

/**
 * @private GET users/:userId
   @usage Getting details of a user, since patient is also a type of user.
*/
router.get("/:userId", userController.getUserViaId);

/**
 * @private PUT users/patients
   @usage Add/Register a patient
*/
router.put("/patients", userController.addPatient);
//checkAuthMiddleware

/**
 * @private POST users/signUp
   @usage Add/Register a user: Doctor or Nurse.
*/
router.post("/signUp", userController.signUp);
//replace this with signup end point along the way.
router.put("/", userController.signUp);

// /users/create POST
router.post("/signIn", userController.signIn);

router.post("/:userId", userController.updateProfile);

router.post("/sendForgotPasswordOTPEmail", userController.sendForgotPasswordOTPEmail);

router.post("/verifyOTP", userController.verifyOTP);

router.post("/updatePassword", userController.updatePassword);

module.exports = router;

