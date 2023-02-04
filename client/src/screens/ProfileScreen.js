import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateTheUserProfile } from '../actions/userActions'

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

  const userUpdateProfile = useSelector((state) => state.UpdateTheUserProfile)
  const { success } = userUpdateProfile

  const navigate = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!userInfo.userName) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(userInfo.userName)
        setEmail(userInfo.userEmail)
      }
    }
  }, [dispatch, navigate, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (userPassword !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(
        updateTheUserProfile({
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
        </Form>
      </Col>
      <Col md={6}>
        <Button type='submit' variant='primary' className='mt-3'>
          Update details
        </Button>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && (
          <Message variant='success'>Profile successfully changed</Message>
        )}
        {loading && <Loader />}
      </Col>
    </Row>
  )
}

export default ProfileScreen
