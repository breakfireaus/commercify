import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATEDPROFILE_RESET } from '../constants/userConstants'

// eslint-disable-next-line no-empty-pattern
const ProfileScreen = ({}) => {
  const [userName, setName] = useState('')
  const [userEmail, setEmail] = useState('')
  const [userPassword, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const UserProfile = useSelector((state) => state.UserProfile)
  const { success } = UserProfile

  const navigate = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!userInfo.name) {
        dispatch(getUserDetails('profile'))
        dispatch({ type: USER_UPDATEDPROFILE_RESET })
      } else {
        setName(userInfo.name)
        setEmail(userInfo.email)
      }
    }
  }, [dispatch, navigate, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (userPassword !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          userName,
          userEmail,
          userPassword,
        })
      )
    }
  }

  return (
    <Row>
      <Col md={6}>
        <h1>My Profile</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group controlId='userName'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type='userName'
              placeholder='Enter Name'
              value={userName}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='userEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Email'
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='Password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='Password'
              placeholder='Enter Password'
              value={userPassword}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='Password'
              placeholder='Confirm Password'
              className='color-black'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Col md={6}>
            <Button className='my-3' type='submit' variant='primary'>
              Update details
            </Button>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {success && (
              <Message variant='success'>Profile successfully changed</Message>
            )}
            {loading && <Loader />}
          </Col>
        </Form>
      </Col>
    </Row>
  )
}

export default ProfileScreen
