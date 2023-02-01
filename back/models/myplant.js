import { Schema, model, ObjectId } from 'mongoose'

const schema = new Schema({
  u_id: {
    type: ObjectId,
    ref: 'users',
    required: [true, '缺少使用者']
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: String,
    default: []
  }
}, { versionKey: false })

export default model('myplant', schema)
