const express = require("express");
const router = express.Router();
const departmentController = require("@controllers/departmentController");
const checkAuthMiddleware = require("@middlewares/checkAuth");
const checkRoleMiddleware = require("@middlewares/checkRole");

// REST API- structure.

/**
 * @public
 * save department
 * url: /department, method: put
*/
router.put("/", departmentController.saveDepartment);

/**
 * @public
 * get all departments
 * url: /department, method: get
*/
router.get("/", departmentController.getAllDepartments);

/**
 * @public
 * get a department via id
 * url: /department/:id, method: get
*/
router.get("/:id", departmentController.getADepartmentVidId);

/**
 * @public
 * update a department via id
 * url: /department/:id, method: patch
*/
router.patch("/:id", departmentController.updateDepartment);

module.exports = router;

