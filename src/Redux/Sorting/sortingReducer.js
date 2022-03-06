import { SORT_BY_PRICE } from "./actionTypes";

const initialState = "price_sort"

export const sortingReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case SORT_BY_PRICE:
    return { ...state, ...payload }

  default:
    return state
  }
}
