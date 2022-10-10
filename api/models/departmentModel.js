const mongoose = require('mongoose')
const Schema = mongoose.Schema
//name = department name like cardiology, neurology
const departmentSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    unique: true
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model('Department', departmentSchema)
