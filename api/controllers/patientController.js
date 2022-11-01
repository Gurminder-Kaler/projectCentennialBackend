const {
  getAllPatientsServiceFunc,
  addPatientServiceFunc,
  getAPatientsInfoServiceFunc,
  getAllTestsOfAPatientServiceFunc,
  addATestOfAPatientServiceFunc
} = require("@services/patientService");

exports.getAllPatients = async (req, res) => {
  console.log("req,,,,,,,,,,,,,,,,,,,,", req.body);
  try {
    return await getAllPatientsServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.addPatient = async (req, res) => {
  console.log("req,,,,,,,,,,,,,,,,,,,,", req.body);
  try {
    return await addPatientServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.getAPatient = async (req, res) => {
  console.log("req,,,,,,,,,,,,,,,,,,,,", req.body);
  try {
    return await getAPatientServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};


exports.getAPatientsInfo = async (req, res) => {
  console.log("req,,,,,,,,,,,,,,,,,,,,", req.body);
  try {
    return await getAPatientsInfoServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.getAllTestsOfAPatient = async (req, res) => {
  console.log("req,,,,,,,,,,,,,,,,,,,,", req.body);
  try {
    return await getAllTestsOfAPatientServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.addATestOfAPatient = async (req, res) => {
  console.log("req,,,,,,,,,,,,,,,,,,,,", req.body);
  try {
    return await addATestOfAPatientServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};