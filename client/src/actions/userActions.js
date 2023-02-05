import axios from 'axios'
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCESSFUL,
  USER_LOGOUT_OCCURRENCE,
  USER_REGISTRATION_FAIL,
  USER_REGISTRATION_REQUESTED,
  USER_REGISTRATION_SUCCESSFUL,
  USER_DETAILPROFILE_FAILED,
  USER_DETAILPROFILE_REQUESTED,
  USER_DETAILPROFILE_SUCCESSFUL,
  USER_UPDATEDPROFILE_REQUESTED,
  USER_UPDATEDPROFILE_SUCCESSFUL,
  USER_UPDATEDPROFILE_FAILED,
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
        type: USER_REGISTRATION_REQUESTED,
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

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILPROFILE_REQUESTED,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/users/${id}`, config)

    dispatch({
      type: USER_DETAILPROFILE_SUCCESSFUL,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_DETAILPROFILE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATEDPROFILE_REQUESTED,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(`/api/users/profile/`, user, config)

    dispatch({
      type: USER_UPDATEDPROFILE_SUCCESSFUL,
      payload: data,
    })

    dispatch({
      type: USER_LOGIN_SUCCESSFUL,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_UPDATEDPROFILE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
