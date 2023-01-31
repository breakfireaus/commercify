import {
  PRODUCT_LIST_REQUESTED,
  PRODUCT_LIST_SUCCESSFUL,
  PRODUCT_LIST_FAILURE,
  PRODUCT_DETAILS_REQUESTED,
  PRODUCT_DETAILS_SUCCESSFUL,
  PRODUCT_DETAILS_FAILED,
} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUESTED:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESSFUL:
      return { loading: false, products: action.payload }
    case PRODUCT_LIST_FAILURE:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUESTED:
      return { loading: true, ...state }
    case PRODUCT_DETAILS_SUCCESSFUL:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
