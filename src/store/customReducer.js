//!---
const defaultState = {
  customers: [],
}

//!--- CONST
const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'
//!--- reducer
export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] }

    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] }

    case REMOVE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      }
    default:
      return state
  }
}

//!--- ACTION CREATOR
export const addCustomersAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const addManyCustomersAction = (payload) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
})
export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMERS,
  payload,
})
