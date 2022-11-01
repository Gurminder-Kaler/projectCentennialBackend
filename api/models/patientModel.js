const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const patientSchema = Schema({
  _id: Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    default: null
  },
  address: {
    type: String,
    default: null
  },
  bloodGroup: {
    type: String,
    default: null
  },
  dob: {
    type: Date,
    default: null
  },
  allergies: {
    type: String,
    default: null
  },
  doctor: {
    type: String,
    default: null
  },
  // createdBy: {
  //   type: Schema.Types.ObjectId, 
  //   ref: 'User',
  //   default: null
  // },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: null
  },
  deletedAt: {
    type: String,
    default: null
  }
})

module.exports = mongoose.model('Patient', patientSchema)
