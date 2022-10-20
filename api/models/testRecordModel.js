const mongoose = require('mongoose')
const Schema = mongoose.Schema
//name = testRecord name like cardiology, neurology
const testRecordSchema = Schema({
  _id: Schema.Types.ObjectId,
  bloodPressureLow: {
    type: String, 
  },
  bloodPressureHigh: {
    type: String, 
  },
  respiratoryRate : {
    type: String,
  },
  risk : {
    type: String,
  },
  createdBy: {
    //created by
    type: Schema.Types.ObjectId, 
    ref: 'User',
    default: null
  },
  userId: {
    //created for
    type: Schema.Types.ObjectId, 
    ref: 'User',
    default: null
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model('TestRecord', testRecordSchema)
