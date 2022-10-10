const {
  saveDepartmentServiceFunc,
  getAllDepartmentsServiceFunc,
  getADepartmentVidIdServiceFunc,
  updateDeparmentServiceFunc,
} = require("@services/departmentService");


//@private
//@usage get all the departments from the database.
exports.getAllDepartments = async (req, res) => {
  try {
    return await getAllDepartmentsServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
//@private
//@usage get a department via Id
exports.getADepartmentVidId = async (req, res) => {
  try {
    return await getADepartmentVidIdServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//@private
//@usage save department
exports.saveDepartment = async (req, res) => {
  try {
    return await saveDepartmentServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//@private
//@usage update Deparment 
exports.updateDeparmentServiceFunc = async (req, res) => {
  try {
    return await updateDeparmentServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
}; 