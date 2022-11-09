import { Puppy } from '../models/puppy.js'

const index = async (req, res) => {
  const puppy = await Puppy.find({})
  res.status(200).json(puppy)
}

const create = async (req, res) => {
  const puppy = await Puppy.create(req.body)
  res.status(200).json(puppy)
}

const deletePuppy = async (req, res) => {
  const puppy = await Puppy.findByIdAndDelete(req.params.id)
  res.status(200).json(puppy)
}

export {
  index,
  create,
  deletePuppy as delete
}