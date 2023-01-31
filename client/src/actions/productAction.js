import axios from 'axios'
import {
  PRODUCT_LIST_REQUESTED,
  PRODUCT_LIST_SUCCESSFUL,
  PRODUCT_LIST_FAILURE,
  PRODUCT_DETAILS_REQUESTED,
  PRODUCT_DETAILS_SUCCESSFUL,
  PRODUCT_DETAILS_FAILED,
} from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUESTED })
    const { data } = await axios.get('/api/product')
    dispatch({
      type: PRODUCT_LIST_SUCCESSFUL,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUESTED })

    const { data } = await axios.get(`/api/product/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESSFUL,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
