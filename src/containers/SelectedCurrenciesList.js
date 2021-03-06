import { connect } from 'react-redux'

import CurrenciesList from '../components/CurrenciesList.jsx'
import { changeSelectedCurrencyCode, changeSelectedCurrencyAmount, changeSelectedCurrencyRate } from '../reducers/selectedCurrencies'

export default connect(
  ({ availableCurrencies, selectedCurrencies }) => ({
    allCurrencies: availableCurrencies,
    selectedCurrencies
  }),
  { changeSelectedCurrencyCode, changeSelectedCurrencyAmount, changeSelectedCurrencyRate }
)(CurrenciesList)
