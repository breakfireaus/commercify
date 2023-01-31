import {
  CART_ADD_AN_ITEM,
  CART_REMOVE_AN_ITEM,
} from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_AN_ITEM:
      const item = action.payload

      const anExistingItem = state.cartItems.find(
        (x) => x.product === item.product
      )

      if (anExistingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === anExistingItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case CART_REMOVE_AN_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
    default:
      return state
  }
}
