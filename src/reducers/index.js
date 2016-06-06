import { combineReducers } from 'redux'

import toCurrency from './toCurrency'
import availableCurrencies from './availableCurrencies'
import selectedCurrencies from './selectedCurrencies'

const appReducer = combineReducers({
  toCurrency,
  availableCurrencies,
  selectedCurrencies
})

export default appReducer
