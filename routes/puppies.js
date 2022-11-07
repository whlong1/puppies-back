import { Router } from 'express'
import * as puppiesCtrl from '../controllers/puppies.js'

const router = Router()

router.get('/')

export {
  router
}
