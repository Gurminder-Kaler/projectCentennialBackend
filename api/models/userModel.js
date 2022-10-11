const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  role: {
    type: String,
    required: true
  }, // doctor, nurse, patient
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  province: {
    type: String
  },
  mobile: {
    type: String
  },
  postalCode: {
    type: String
  },
  bloodGroup: {
    type: String
  },
  dob: {
    type: Date
  },
  healthCardNo: {
    type: String
  },
  allergies: {
    type: String
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    default: null,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  otp: {
    type: String,
    trim: true
  },
  isDeleted: {
    type: Boolean,
    default: false
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

module.exports = mongoose.model('User', userSchema)
