import { Puppy } from '../models/puppy.js'

const index = async (req, res) => {
  try {
    const puppy = await Puppy.find({}).sort({ createdAt: 'desc' })
    res.json(puppy)
  } catch (err) {
    res.json(err)
  }
}

const create = async (req, res) => {
  try {
    const puppy = await Puppy.create(req.body)
    res.status(200).json(puppy)
  } catch (err) {
    res.json(err)
  }
}

const deletePuppy = async (req, res) => {
  try {
    const puppy = await Puppy.findByIdAndDelete(req.params.id)
    res.status(200).json(puppy)
  } catch (err) {
    res.json(err)
  }
}

export {
  index,
  create,
  deletePuppy as delete
}