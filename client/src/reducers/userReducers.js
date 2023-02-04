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
  USER_UPDATEDPROFILE_FAILED,
  USER_UPDATEDPROFILE_SUCCESSFUL,
  USER_UPDATEDPROFILE_REQUESTED,
  USER_UPDATEDPROFILE_RESET,
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
    case USER_REGISTRATION_REQUESTED:
      return { loading: true }
    case USER_REGISTRATION_SUCCESSFUL:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTRATION_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userDetailProfileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILPROFILE_REQUESTED:
      return { ...state, loading: true }
    case USER_DETAILPROFILE_SUCCESSFUL:
      return { loading: false, user: action.payload }
    case USER_DETAILPROFILE_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const UpdateUserProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATEDPROFILE_REQUESTED:
      return { loading: true }
    case USER_UPDATEDPROFILE_SUCCESSFUL:
      return { loading: false, success: true, userInfo: action.payload }
    case USER_UPDATEDPROFILE_FAILED:
      return { loading: false, error: action.payload }
    case USER_UPDATEDPROFILE_RESET:
      return {}

    default:
      return state
  }
}
