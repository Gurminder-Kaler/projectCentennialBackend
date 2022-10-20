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
    type: String,
    default: null
  },
  address: {
    type: String,
    default: null
  },
  city: {
    type: String,
    default: null
  },
  province: {
    type: String,
    default: null
  },
  mobile: {
    type: String,
    default: null
  },
  postalCode: {
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
  healthCardNo: {
    type: String,
    default: null
  },
  allergies: {
    type: String,
    default: null
  },
  email: {
    type: String,
    trim: true,
    required: true,
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
    trim: true,
    default: null
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: Schema.Types.ObjectId, 
    ref: 'User',
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

module.exports = mongoose.model('User', userSchema)
