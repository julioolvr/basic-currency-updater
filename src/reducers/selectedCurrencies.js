export const CHANGE_SELECTED_CURRENCY_CODE = 'CHANGE_SELECTED_CURRENCY_CODE'

const initialSelectedCurrencies = [
  { code: 'USD', rate: 0.96, amount: 25 },
  { code: 'GBP', rate: 0.8, amount: 30 },
  { code: 'EUR', rate: 0.7, amount: 50 }
]

export function changeSelectedCurrencyCode(index, newCurrencyCode) {
  return {
    type: CHANGE_SELECTED_CURRENCY_CODE,
    payload: { index, newCurrencyCode }
  }
}

const ACTION_HANDLERS = {
  [CHANGE_SELECTED_CURRENCY_CODE]: (state, action) => {
    let newCurrency = { ...state[action.payload.index], code: action.payload.newCurrencyCode }
    let newState = [...state]
    newState[action.payload.index] = newCurrency
    return newState
  }
}

export const selectedCurrenciesReducer = (state = initialSelectedCurrencies, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default selectedCurrenciesReducer
