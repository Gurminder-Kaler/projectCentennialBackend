const mongoose = require("mongoose");
const messages = require("@constants/messages");
const TestRecord = require("@models/testRecordModel");
const Patient = require("@models/patientModel");

const getAllTestsOfAPatientServiceFunc = async (req, res) => {
  Patient.findOne({ _id: req.params.patientId }).then((patient) => {
    TestRecord.find({
      userId: req.params.patientId
    })
      .select("-deletedAt")
      .exec()
      .then((docs) => {
        return res.json({
          success: true,
          status: 200,
          message: messages.SUCCESS.TEST.ALL,
          patient: {
            lastName: patient.lastName,
            address: patient.address,
            bloodGroup: patient.bloodGroup,
            dob: patient.dob,
            allergies: patient.allergies,
            doctor: patient.doctor,
            createdAt: patient.createdAt,
          },
          tests: docs.map((doc) => {
            return {
              _id: doc && doc._id,
              risk: doc && doc.risk,
              bloodPressureLow: doc && doc.bloodPressureLow,
              bloodPressureHigh: doc && doc.bloodPressureHigh,
              respiratoryRate: doc && doc.respiratoryRate,
              createdAt: doc && doc.createdAt,
              updatedAt: doc && doc.updatedAt,
            };
          }),
        });
      })
      .catch((err) => {
        return res.json({
          success: false,
          status: 500,
          message: err,
        });
      });
  });

};

const addATestOfAPatientServiceFunc = async (req, res) => {
  try {
    Patient.findOne({ _id: req.params.patientId }).then((patient) => {
      let testVar = new TestRecord({
        _id: new mongoose.Types.ObjectId(),
        risk: req.body.risk,
        bloodPressureLow: req.body.bloodPressureLow,
        bloodPressureHigh: req.body.bloodPressureHigh,
        respiratoryRate: req.body.respiratoryRate,
        userId: req.params.patientId,
      });

      testVar.save().then((result) => {
        // console.log("result111", result);
        if (result) {
          return res.json({
            status: 200,
            success: true,
            message: messages.SUCCESS.TEST.ADDED,
            data: {
              patient: {
                lastName: patient.lastName,
                address: patient.address,
                bloodGroup: patient.bloodGroup,
                dob: patient.dob,
                allergies: patient.allergies,
                doctor: patient.doctor,
                createdAt: patient.createdAt,
              },
              id: result._id,
              risk: result.risk,
              bloodPressureLow: result.bloodPressureLow,
              bloodPressureHigh: result.bloodPressureHigh,
              respiratoryRate: result.respiratoryRate,
              createdAt: result.createdAt,
              updatedAt: result.updatedAt,
            },
          });
        }
      });
    });

    // console.log("77");
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: "err",
    });
  }
};

const addPatientServiceFunc = async (req, res) => {
  try {
    let patient = new Patient({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      doctor: req.body.doctor,
      dob: req.body.dob,
      allergies: req.body.allergies,
      department: req.body.department,
      createdBy: req.body.createdBy
    });
    patient.save().then((result) => {
      if (result) {
        return res.json({
          status: 200,
          success: true,
          message: messages.SUCCESS.PATIENT.ADDED,
          data: {
            id: result._id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            bloodGroup: req.body.bloodGroup,
            dob: req.body.dob,
            doctor: req.body.doctor,
            allergies: req.body.allergies,
            department: req.body.department,
            createdBy: req.body.createdBy
          },
        });
      }
    });
    // console.log("77");
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: "err",
    });
  }
};

const getAPatientsInfoServiceFunc = async (req, res) => {
  console.log('user service getAPatientsInfo  ////////', req.params);
  // const tests = await TestRecord.find({ userId: req.params.patientId }).lean();

  Patient.findById(
     req.params.patientId)
    .select("-deletedAt")
    .then((doc) => {
      if (!doc) {
        return res.json({
          success: false,
          status: 404,
          message: "No Patient found with this id",
        });
      }
      return res.json({
        success: true,
        status: 200,
        message: messages.SUCCESS.PATIENT.SINGLE,
        data: doc
      });
    })
    .catch((err) => {
      return res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
};

const getAllPatientsServiceFunc = async (req, res) => {
  Patient.find()
    .select("-deletedAt")
    .exec()
    .then((doc) => {
      return res.json({
        success: true,
        status: 200,
        message: messages.SUCCESS.PATIENT.ALL,
        data: doc
      });
    })
    .catch((err) => {
      return res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
}

const patientService = (module.exports = {
  getAllPatientsServiceFunc,
  getAllTestsOfAPatientServiceFunc,
  addATestOfAPatientServiceFunc,
  addPatientServiceFunc,
  getAPatientsInfoServiceFunc
});