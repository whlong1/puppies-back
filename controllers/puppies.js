import { Puppy } from '../models/puppy.js'

const index = async (req, res) => {
  const puppy = await Puppy.find({})
  res.status(200).json(puppy)
}


export {
  index
}