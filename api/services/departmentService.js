const mongoose = require("mongoose");
const Department = require("@models/departmentModel");
const messages = require("@constants/messages");
const departmentValidator = require("@validations/departmentRequest/departmentValidator");

// get all departments
const getAllDepartmentsServiceFunc = async (req, res) => {
    try {
        Department.find()
            .exec()
            .then((departments) => {
                res.json({
                    success: true,
                    status: 200,
                    message: messages.SUCCESS.DEPARTMENT.FETCHED,
                    data: departments,
                });
            });
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: err,
        });
    }
};

// get a department via Id
const getADepartmentVidIdServiceFunc = async (req, res) => {
    try {
    Department.find({ _id: req.body.id })
        .exec()
        .then((department) => {
            res.json({
                success: true,
                status: 200,
                message: messages.SUCCESS.DEPARTMENT.FETCHED,
                data: department,
            });
        });
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: err,
        });
    }
};

// save department
const saveDepartmentServiceFunc = async (req, res) => {
    try {
        const { errors, isValid } = departmentValidator(req.body);

        if (!isValid) {
            return res.json({
                status: 404,
                success: false,
                message: errors,
            });
        }
        let obj = {
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
        };
        new Department(obj)
            .save()
            .then((result) => {
                console.log("result", result);
                res.json({
                    success: true,
                    status: 200,
                    message: messages.SUCCESS.DEPARTMENT.CREATED,
                    data: result,
                });
            })
            .catch((err) => {
                res.json({
                    status: 500,
                    success: false,
                    message: err.message ? err.message.message : "",
                });
            });
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: err,
        });
    }
};

// update department
const updateDepartmentServiceFunc = async (req, res) => {
    try {
        const { errors, isValid } = departmentValidator(req.body);

        if (!isValid) {
            return res.json({
                status: 404,
                success: false,
                message: errors,
            });
        }
        let fields = {};

        fields.name = !req.body.name;
        Department.findOneAndUpdate(
            { _id: req.body._id },
            { $set: fields },
            { new: true }
        ).then((innerRes) => {
            res.json({
                success: true,
                status: 200,
                data: innerRes,
            });
        });
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: err,
        });
    }
};

module.exports = {
    getAllDepartmentsServiceFunc,
    getADepartmentVidIdServiceFunc,
    saveDepartmentServiceFunc,
    updateDepartmentServiceFunc
};