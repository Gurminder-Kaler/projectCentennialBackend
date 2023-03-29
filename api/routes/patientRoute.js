const express = require("express");
const router = express.Router();
const patientController = require("@controllers/patientController");
//REST API- structure.

// GET retrieves resources.
// POST submits new data to the server.
// PUT updates existing data.
// DELETE removes data.

/**
 * @private GET /patients
 * @usage get all patients
*/
router.get("/", patientController.getAllPatients);

//----------------------------------------------------------------------

/**
 * @private POST /patients
 * @usage Add/Register a patient
*/
router.post("/", patientController.addPatient);

//----------------------------------------------------------------------


/**
 * @private GET /patients/:patientId
 * @params patientId
 * @usage Get patients info via patientId.
*/
router.get("/:patientId", patientController.getAPatientsInfo);

//----------------------------------------------------------------------

/**
 * @private GET /patients/:patientId/tests
 * @params patientId
 * @usage Get all the tests of a patient.
*/
router.get("/:patientId/tests", patientController.getAllTestsOfAPatient);

//----------------------------------------------------------------------

/**
 * @private POST /patients/:patientId/testss
 * @params patientId
 * @usage Add a test for a patient.
*/
router.post("/:patientId/tests", patientController.addATestOfAPatient);



module.exports = router;