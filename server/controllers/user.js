import User from '../models/users.js'
import generateToken from '../utils/tokenGenerator.js'
import asyncHandler from 'express-async-handler'

// Authenticate user + get token
// Post route /api/users/login
// public

const authUser = asyncHandler(async (req, res) => {
  const { userEmail, userPassword } = req.body

  const user = await User.findOne({ userEmail })

  if (user && (await user.matchpassword(userpassword))) {
    res.json({
      _id: user._id,
      name: user.userName,
      email: user.userEmail,
      userAdmin: user.userAdmin,
      token: null,
    })
  } else {
    res.status(401)
    throw new Error('Wrong email or password.')
  }
})

export { authUser }
