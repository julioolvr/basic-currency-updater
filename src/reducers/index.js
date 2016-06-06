const initialState = {
  availableCurrencies: ['USD', 'GBP', 'EUR', 'ARS'],
  selectedCurrencies: [
    { code: 'USD', rate: 0.96, amount: 25 },
    { code: 'GBP', rate: 0.8, amount: 30 },
    { code: 'EUR', rate: 0.7, amount: 50 }
  ],
  toCurrency: { code: 'ARS' }
}

const appReducer = (state = initialState) => state

export default appReducer
