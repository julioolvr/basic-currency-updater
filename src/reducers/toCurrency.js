export const CHANGE_TO_CURRENCY = 'CHANGE_TO_CURRENCY'

export function changeToCurrency(currency) {
  return {
    type: CHANGE_TO_CURRENCY,
    payload: currency
  }
}

const ACTION_HANDLERS = {
  [CHANGE_TO_CURRENCY]: (state, action) => action.payload
}

export const toCurrencyReducer = (state = { code: 'ARS' }, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default toCurrencyReducer
