const {
  signUpServiceFunc,
  getAllUsersOfTypeServiceFunc,
  getUserViaIdServiceFunc,
  updateProfileServiceFunc,
  sendForgotPasswordOTPEmailServiceFunc,
  signInServiceFunc,
  verifyOTPServiceFunc,
  addPatientServiceFunc,
  updatePasswordServiceFunc,
  getAllPatientsOfAUserServiceFunc,
  getAPatientsInfoServiceFunc

} = require("@services/userService");

exports.getAllUsersOfType = async (req, res) => {
  console.log("req,,,,,,,,,,,,,,,,,,,,", req.body);
  try {
    return await getAllUsersOfTypeServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.getAllPatientsOfAUser = async (req, res) => {
  console.log("req,,,,,,,,,,,,,,,,,,,,", req.body);
  try {
    return await getAllPatientsOfAUserServiceFunc(req, res);
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

exports.getUserViaId = async (req, res) => {
  try {
    return await getUserViaIdServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.signUp = async (req, res) => {
  try {
    return await signUpServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.addPatient = async (req, res) => {
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

exports.signIn = async (req, res) => {
  try {
    return await signInServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    return await updateProfileServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.sendForgotPasswordOTPEmail = async (req, res) => {
  try {
    return await sendForgotPasswordOTPEmailServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    return await verifyOTPServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    return await updatePasswordServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
