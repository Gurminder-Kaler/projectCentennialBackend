const express = require("express");
const router = express.Router();
const departmentController = require("@controllers/departmentController");
const checkAuthMiddleware = require("@middlewares/checkAuth");
const checkAdminMiddleware = require("@middlewares/checkAdmin");
const checkCustomer = require("@middlewares/checkCustomer");
const checkAuth = require("@middlewares/checkAuth");
const { route } = require("./userRoute");

// REST API- structure.

/**
 * @public
 * save department
 * url: /department, method: post
*/
router.post("/", departmentController.saveDepartment);

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
router.patch("/:id", departmentController.updateDeparment);

module.exports = router;

