import {
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCESSFUL,
  USER_LOGOUT_OCCURRENCE,
  USER_REGISTRATION_FAIL,
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESSFUL,
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUESTED:
      return { loading: true }
    case USER_LOGIN_SUCCESSFUL:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAILED:
      return { loading: false, error: action.payload }
    case USER_LOGOUT_OCCURRENCE:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTRATION_REQUEST:
      return { loading: true }
    case USER_REGISTRATION_SUCCESSFUL:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTRATION_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
