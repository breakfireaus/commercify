import User from '../models/users.js'
import generateToken from '../utils/tokenGenerator.js'
import asyncHandler from 'express-async-handler'

// Authenticate user + get token
// Post route /api/users/login
// public

const authUser = asyncHandler(async (req, res) => {
  const { userEmail, userPassword } = req.body

  const user = await User.findOne({ userEmail })

  if (user && (await user.matchpassword(userPassword))) {
    res.json({
      _id: user._id,
      name: user.userName,
      email: user.userEmail,
      userAdmin: user.userAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Wrong email or password.')
  }
})

// Register new user
// Post route /api/users
// public

const registerAUser = asyncHandler(async (req, res) => {
  const { userName, userEmail, userPassword } = req.body

  const userExists = await User.findOne({ userEmail })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    userName,
    userEmail,
    userPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.userName,
      email: user.userEmail,
      userAdmin: user.userAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// Get user profile
// get route /api/users/profile
// Private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.userName,
      email: user.userEmail,
      userAdmin: user.userAdmin,
    })
  } else {
    res.status(404)
    throw new Error('user not found')
  }
})

export { authUser, registerAUser, getUserProfile }
