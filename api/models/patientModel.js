const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const patientSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    default: null
  },
  address: {
    type: String,
    default: null
  },
  country: {
    type: String,
    default: null
  },
  bloodGroup: {
    type: String,
    default: null
  },
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
