import mongoose from 'mongoose'

const Schema = mongoose.Schema

const puppySchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 0 },
  breed: { type: String, default: "Mixed" },
  ears: {
    type: String,
    default: 'Button',
    enum: ['Button', 'Drop', 'Pointy']
  },
  color: {
    type: String,
    default: 'Grey',
    enum: ['Grey', 'Black', 'Brown', 'White', 'Golden']
  },
},
  { timestamps: true }
)

const Puppy = mongoose.model('Puppy', puppySchema)

export {
  Puppy
}