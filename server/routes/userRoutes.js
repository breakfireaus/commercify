import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerAUser,
  updateTheUserProfile,
} from '../controllers/user.js'
import { protect } from '../middleware/authmiddleware.js'

router.route('/').post(registerAUser)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateTheUserProfile)
export default router
