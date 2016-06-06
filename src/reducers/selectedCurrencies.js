const initialSelectedCurrencies = [
  { code: 'USD', rate: 0.96, amount: 25 },
  { code: 'GBP', rate: 0.8, amount: 30 },
  { code: 'EUR', rate: 0.7, amount: 50 }
]

export const selectedCurrenciesReducer = (state = initialSelectedCurrencies, action) => {
  switch(action.type) {
  default:
    return state
  }
}

export default selectedCurrenciesReducer
