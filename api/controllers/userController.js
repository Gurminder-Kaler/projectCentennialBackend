const {
  signUpServiceFunc,
  getAllUsersOfTypeServiceFunc,
  getUserViaIdServiceFunc,
  updateProfileServiceFunc,
  sendForgotPasswordOTPEmailServiceFunc,
  getAllPatientsOfAUserServiceFunc,
  signInServiceFunc,
  verifyOTPServiceFunc,
  addPatientServiceFunc,
  updatePasswordServiceFunc
} = require("@services/userService");


exports.getAllPatientsOfAUser = async (req, res) => {
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

exports.getAllUsersOfType = async (req, res) => {
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
