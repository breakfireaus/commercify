import axios from 'axios'
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCESSFUL,
  USER_LOGOUT_OCCURRENCE,
  USER_REGISTRATION_FAIL,
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESSFUL,
} from '../constants/userConstants'

export const login = (userEmail, userPassword) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUESTED,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/api/users/login',
      { userEmail, userPassword },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESSFUL,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT_OCCURRENCE })
}

export const register =
  (userName, userEmail, userPassword) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTRATION_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        '/api/users',
        { userName, userEmail, userPassword },
        config
      )

      dispatch({
        type: USER_REGISTRATION_SUCCESSFUL,
        payload: data,
      })

      dispatch({
        type: USER_LOGIN_SUCCESSFUL,
        payload: data,
      })

      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_REGISTRATION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
